export const PROVIDE_LABEL_OPTIONS = {
  PRINT: 'PRINT',
  EMAIL: 'EMAIL',
  LABELLESS: 'UPS_LABELLESS',
  MAIL: 'MAIL',
  PICKUP: 'UPS_PICKUP',
  ANY_CARRIER: 'ANY_CARRIER'
};

export const LABEL_OPTIONS_VALUE_ALIAS_MAPPING = {
  UPSDropOff: PROVIDE_LABEL_OPTIONS.PRINT,
  LabelLess_UPSZapposDropOff: PROVIDE_LABEL_OPTIONS.LABELLESS,
  UPSZapposPickup: PROVIDE_LABEL_OPTIONS.PICKUP
};

export const GET_ORDER_ID_ATTEMPTS = {
  INITIAL_ATTEMPTS: 0,
  MAX_ATTEMPTS: 10
};
