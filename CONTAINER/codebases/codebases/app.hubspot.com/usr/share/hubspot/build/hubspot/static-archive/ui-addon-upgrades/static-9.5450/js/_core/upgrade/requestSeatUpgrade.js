'use es6';

import Raven from 'Raven';
import { sendRequestAccessNotification } from 'ui-addon-upgrades/_core/common/api/requestNotificationsApi';
import * as tracker from 'ui-addon-upgrades/_core/common/eventTracking/tracker';
import wrapWithErrorMonitoring from 'ui-addon-upgrades/_core/common/reliability/wrapWithErrorMonitoring';
export var requestSeatUpgrade = wrapWithErrorMonitoring('requestSeatUpgrade', function (_ref) {
  var apiName = _ref.apiName;
  return sendRequestAccessNotification(apiName).then(function () {
    // ********** PUBLIC EVENT **********
    // Public Events help teams across HubSpot automate work and customize experiences based on user actions.
    // Speak with #product-insight and your PM before any shipping any changes to this event incl. event name, properties, values, and when it occurs.
    // Read more about Public Events on the wiki: https://wiki.hubspotcentral.net/display/PM/Public+Events+-+Amplitude+events+ready+for+HubSpot+team+use+and+automation
    tracker.track('requestUpgradeInteraction', {
      action: 'request seat succeeded',
      apiName: apiName
    });
  }).catch(function (e) {
    // ********** PUBLIC EVENT **********
    // Public Events help teams across HubSpot automate work and customize experiences based on user actions.
    // Speak with #product-insight and your PM before any shipping any changes to this event incl. event name, properties, values, and when it occurs.
    // Read more about Public Events on the wiki: https://wiki.hubspotcentral.net/display/PM/Public+Events+-+Amplitude+events+ready+for+HubSpot+team+use+and+automation
    tracker.track('requestUpgradeInteraction', {
      action: 'request seat failed',
      apiName: apiName
    });
    Raven.captureMessage('Request seat notification failed', {
      extra: {
        error: e
      }
    });
    throw e;
  });
});