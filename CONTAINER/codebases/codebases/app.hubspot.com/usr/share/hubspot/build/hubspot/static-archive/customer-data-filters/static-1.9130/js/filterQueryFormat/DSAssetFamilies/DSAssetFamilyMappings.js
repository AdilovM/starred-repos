'use es6';

import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _ImmutableMap, _ImmutableMap2, _ImmutableMap3, _ImmutableMap4, _ImmutableMap5;

import * as DSAssetFamilies from './DSAssetFamilies';
import * as ListSegClassicAssetFamilies from '../../converters/listSegClassic/ListSegClassicAssetFamilies';
import * as ObjectTypes from 'customer-data-objects/constants/ObjectTypes';
import * as ReferenceObjectTypes from 'reference-resolvers/constants/ReferenceObjectTypes';
import { Map as ImmutableMap } from 'immutable';
import { PRIVACY_CONSENT } from '../../converters/listSegClassic/ListSegConstants';
export var ObjectTypeToDSAssetFamily = ImmutableMap((_ImmutableMap = {}, _defineProperty(_ImmutableMap, ObjectTypes.COMPANY, DSAssetFamilies.COMPANY_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.CONTACT, DSAssetFamilies.CONTACT_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.DEAL, DSAssetFamilies.DEAL_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.TICKET, DSAssetFamilies.TICKET_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.ENGAGEMENT, DSAssetFamilies.ENGAGEMENT_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.LINE_ITEM, DSAssetFamilies.LINE_ITEM_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.PRODUCT, DSAssetFamilies.PRODUCT_PROPERTY), _defineProperty(_ImmutableMap, ObjectTypes.QUOTE, DSAssetFamilies.QUOTE_PROPERTY), _ImmutableMap));
export var DSAssetFamilyToObjectType = ObjectTypeToDSAssetFamily.flip();
export var ObjectSegTypeToDSAssetFamily = ImmutableMap((_ImmutableMap2 = {}, _defineProperty(_ImmutableMap2, ObjectTypes.COMPANY, DSAssetFamilies.COMPANY_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.CONTACT, DSAssetFamilies.CONTACT_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.DEAL, DSAssetFamilies.DEAL_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.TICKET, DSAssetFamilies.TICKET_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.ENGAGEMENT, DSAssetFamilies.ENGAGEMENT_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.LINE_ITEM, DSAssetFamilies.LINE_ITEM_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.PRODUCT, DSAssetFamilies.PRODUCT_PROPERTY), _defineProperty(_ImmutableMap2, ObjectTypes.QUOTE, DSAssetFamilies.QUOTE_PROPERTY), _ImmutableMap2));
export var DSAssetFamilyToObjectSegType = ObjectSegTypeToDSAssetFamily.flip();
export var ListSegClassicTypeToDSAssetFamily = ImmutableMap((_ImmutableMap3 = {}, _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.ADS_PROPERTY, DSAssetFamilies.ADS_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.COMPANY_PROPERTY_VALUE, DSAssetFamilies.COMPANY_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.COMPANY_PROPERTY, DSAssetFamilies.COMPANY_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.CTA, DSAssetFamilies.CTA), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.DEAL_PROPERTY, DSAssetFamilies.DEAL_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.EMAIL_CAMPAIGN, DSAssetFamilies.EMAIL_CAMPAIGN), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.EMAIL_SUBSCRIPTION, DSAssetFamilies.EMAIL_SUBSCRIPTION), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.ENGAGEMENT_PROPERTY, DSAssetFamilies.ENGAGEMENT_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.EVENT, DSAssetFamilies.EVENT), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.FORM, DSAssetFamilies.FORM), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.IMPORT, DSAssetFamilies.CONTACT_IMPORT), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.LIST_MEMBERSHIP, DSAssetFamilies.CONTACT_LIST), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.LINE_ITEM_PROPERTY, DSAssetFamilies.LINE_ITEM_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.PAGE_VIEW, DSAssetFamilies.PAGE_VIEW), _defineProperty(_ImmutableMap3, PRIVACY_CONSENT, DSAssetFamilies.CONTACT_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.PRODUCT_PROPERTY, DSAssetFamilies.PRODUCT_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.PROPERTY_VALUE, DSAssetFamilies.CONTACT_PROPERTY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.SURVEY_MONKEY_QUESTION, DSAssetFamilies.SURVEY_MONKEY_QUESTION), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.SURVEY_MONKEY, DSAssetFamilies.SURVEY_MONKEY_SURVEY), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.WEBINAR, DSAssetFamilies.GOTO_WEBINAR_WEBINAR), _defineProperty(_ImmutableMap3, ListSegClassicAssetFamilies.WORKFLOW, DSAssetFamilies.WORKFLOW), _ImmutableMap3));
export var DSAssetFamilyToListSegClassicType = ListSegClassicTypeToDSAssetFamily.flip().merge( // Make sure that families with multiple family names always get the correct name
ImmutableMap((_ImmutableMap4 = {}, _defineProperty(_ImmutableMap4, DSAssetFamilies.COMPANY_PROPERTY, ListSegClassicAssetFamilies.COMPANY_PROPERTY_VALUE), _defineProperty(_ImmutableMap4, DSAssetFamilies.CONTACT_PROPERTY, ListSegClassicAssetFamilies.PROPERTY_VALUE), _ImmutableMap4)));
export var referenceTypeToAssetFamily = ImmutableMap((_ImmutableMap5 = {}, _defineProperty(_ImmutableMap5, ReferenceObjectTypes.ADS_PROPERTY, DSAssetFamilies.ADS_PROPERTY), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.CONTACT_LIST, DSAssetFamilies.CONTACT_LIST), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.CTA, DSAssetFamilies.CTA), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.CTA_TO_PLACEMENT, DSAssetFamilies.CTA_TO_PLACEMENT), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.EMAIL_CAMPAIGN, DSAssetFamilies.EMAIL_CAMPAIGN), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.ENGAGEMENT_PROPERTY, DSAssetFamilies.ENGAGEMENT_PROPERTY), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.EVENT, DSAssetFamilies.EVENT), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.INBOUND_DB_CONTACT_IMPORT, DSAssetFamilies.CONTACT_IMPORT), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.INTEGRATION, DSAssetFamilies.INTEGRATION), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.LINE_ITEM_PROPERTY, DSAssetFamilies.LINE_ITEM_PROPERTY), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.PRODUCT_PROPERTY, DSAssetFamilies.PRODUCT_PROPERTY), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.SURVEY, DSAssetFamilies.SURVEY_MONKEY_SURVEY), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.SURVEY_QUESTION, DSAssetFamilies.SURVEY_MONKEY_QUESTION), _defineProperty(_ImmutableMap5, ReferenceObjectTypes.WEBINAR, DSAssetFamilies.GOTO_WEBINAR_WEBINAR), _ImmutableMap5));
export var assetFamilyToReferenceType = referenceTypeToAssetFamily.flip();