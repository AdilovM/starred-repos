'use es6';

import { createSelector } from 'reselect';
import get from 'transmute/get';
import { getLatestWidgetData } from '../../widget-data/selectors/getLatestWidgetData';
export var getMessagesPageUri = createSelector(getLatestWidgetData, get('messagesPageUri'));