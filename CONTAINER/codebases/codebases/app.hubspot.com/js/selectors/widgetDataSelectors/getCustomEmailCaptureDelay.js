'use es6';

import { createSelector } from 'reselect';
import get from 'transmute/get';
import { getWelcomeMessage } from './getWelcomeMessage';
export var getCustomEmailCaptureDelay = createSelector(getWelcomeMessage, get('customEmailCaptureDelay'));