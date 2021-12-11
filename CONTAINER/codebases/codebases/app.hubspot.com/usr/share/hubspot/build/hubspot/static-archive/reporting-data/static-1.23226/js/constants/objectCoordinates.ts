import { Map as ImmutableMap } from 'immutable';
import { ATTRIBUTION_TOUCH_POINTS, COMPANIES, CONTACTS, CONTACT_CREATE_ATTRIBUTION, CONVERSATIONS, DEALS, DEAL_CREATE_ATTRIBUTION, ENGAGEMENTS, FEEDBACK_SUBMISSIONS, LINE_ITEMS, PRODUCTS, TICKETS } from './dataTypes/inboundDb';
export var HUBSPOT_OBJECT_COORDINATES_TO_DATA_TYPE = ImmutableMap({
  '0-1': CONTACTS,
  '0-2': COMPANIES,
  '0-3': DEALS,
  '0-4': ENGAGEMENTS,
  '0-5': TICKETS,
  '0-7': PRODUCTS,
  '0-8': LINE_ITEMS,
  '0-11': CONVERSATIONS,
  '0-19': FEEDBACK_SUBMISSIONS,
  '0-20': ATTRIBUTION_TOUCH_POINTS,
  '0-52': CONTACT_CREATE_ATTRIBUTION,
  '0-63': DEAL_CREATE_ATTRIBUTION
});
export var DATA_TYPE_TO_HUBSPOT_OBJECT_COORDINATES = HUBSPOT_OBJECT_COORDINATES_TO_DATA_TYPE.flip();