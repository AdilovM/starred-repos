'use es6';

import { RESET_MODAL } from 'sales-modal/redux/actionTypes';
import { DECKS_FETCH_STARTED, DECKS_FETCH_SUCCEEDED, DECKS_FETCH_FAILED } from '../actionTypes';
var initialState = {
  data: null,
  fetching: true,
  error: false
};
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case DECKS_FETCH_STARTED:
      return initialState;

    case DECKS_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        data: action.payload,
        fetching: false,
        error: false
      });

    case DECKS_FETCH_FAILED:
      return Object.assign({}, state, {
        fetching: false,
        error: true
      });

    case RESET_MODAL:
      return initialState;

    default:
      {
        return state;
      }
  }
});