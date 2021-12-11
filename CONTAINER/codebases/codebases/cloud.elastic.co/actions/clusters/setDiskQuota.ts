/*
 * ELASTICSEARCH CONFIDENTIAL
 * __________________
 *
 *  Copyright Elasticsearch B.V. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch B.V. and its suppliers, if any.
 * The intellectual and technical concepts contained herein
 * are proprietary to Elasticsearch B.V. and its suppliers and
 * may be covered by U.S. and Foreign Patents, patents in
 * process, and are protected by trade secret or copyright
 * law.  Dissemination of this information or reproduction of
 * this material is strictly forbidden unless prior written
 * permission is obtained from Elasticsearch B.V.
 */

import asyncRequest, { resetAsyncRequest } from '../asyncRequests'

import { setEsClusterInstancesSettingsOverridesUrl } from '../../lib/api/v1/urls'

import { SET_DISK_QUOTA } from '../../constants/actions'

export function setDiskQuota({
  deployment,
  instanceIds,
  diskQuota,
  previousDiskQuota,
  defaultDiskQuota,
}) {
  const { regionId, id: clusterId } = deployment

  const url = setEsClusterInstancesSettingsOverridesUrl({
    regionId,
    clusterId,
    instanceIds,
  })

  return asyncRequest({
    type: SET_DISK_QUOTA,
    url,
    method: `PUT`,
    meta: { regionId, clusterId, instanceIds, previousDiskQuota, defaultDiskQuota },
    crumbs: [regionId, clusterId],
    payload: {
      storage_multiplier: diskQuota,
    },
  })
}

export const resetSetDiskQuotaRequest = (...crumbs) => resetAsyncRequest(SET_DISK_QUOTA, crumbs)
