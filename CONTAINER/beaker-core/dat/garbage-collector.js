const archivesDb = require('../dbs/archives')
const datLibrary = require('./library')
const {
  DAT_GC_FIRST_COLLECT_WAIT,
  DAT_GC_REGULAR_COLLECT_WAIT
} = require('../lib/const')
const debug = require('../lib/debug-logger').debugLogger('datgc')

// globals
// =

var nextGCTimeout

// exported API
// =

exports.setup = function () {
  schedule(DAT_GC_FIRST_COLLECT_WAIT)
}

const collect = exports.collect = async function ({olderThan, isOwner} = {}) {
  // clear any scheduled GC
  if (nextGCTimeout) {
    clearTimeout(nextGCTimeout)
    nextGCTimeout = null
  }

  // run the GC
  var totalBytes = 0
  var skippedArchives = 0
  var startTime = Date.now()

  // first unsave expired archives
  var expiredArchives = await archivesDb.listExpiredArchives()
  debug('GC unsaving %d expired archives', expiredArchives.length)
  var promises = []
  for (let i = 0; i < expiredArchives.length; i++) {
    promises.push(archivesDb.setUserSettings(0, expiredArchives[i].key, {isSaved: false}))
  }
  await Promise.all(promises)

  // now GC old archives
  var unusedArchives = await archivesDb.listGarbageCollectableArchives({olderThan, isOwner})
  debug('GC cleaning out %d unused archives', unusedArchives.length)
  debug(unusedArchives)
  for (let i = 0; i < unusedArchives.length; i++) {
    await datLibrary.unloadArchive(unusedArchives[i].key)
    totalBytes += await archivesDb.deleteArchive(unusedArchives[i].key)
  }

  debug('GC completed in %d ms', Date.now() - startTime)

  // schedule the next GC
  schedule(DAT_GC_REGULAR_COLLECT_WAIT)

  // return stats
  return {totalBytes, totalArchives: unusedArchives.length - skippedArchives, skippedArchives}
}

// helpers
// =

function schedule (time) {
  nextGCTimeout = setTimeout(collect, time)
  nextGCTimeout.unref()
}
