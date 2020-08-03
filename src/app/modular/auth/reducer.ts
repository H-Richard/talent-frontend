/* eslint-disable no-param-reassign */
import produce from 'immer';
import type { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import type { AuthState } from './types';
import * as actions from './actions';

type AuthActions = ActionType<typeof actions>;

const initialState: AuthState = {
  loading: false,
};

export type AuthReducer = Reducer<AuthState, AuthActions>;

const reducer: AuthReducer = produce(
  (state: AuthState, action: AuthActions) => {
    switch (action.type) {
      case actions.LOGIN_START:
      case actions.SIGNUP_START:
        state.loading = true;
        break;
      case actions.LOGIN_ERROR:
        state.loading = false;
        switch (action.payload.error.slice(-3)) {
          case '401':
            state.error = 'Incorrect credentials.';
            break;
          default:
            state.error = action.payload.error;
            break;
        }
        break;
      case actions.SIGNUP_ERROR:
        state.loading = false;
        switch (action.payload.error.slice(-3)) {
          case '409':
            state.error = 'Credentials in use.';
            break;
          default:
            state.error = action.payload.error;
            break;
        }
        break;
      case actions.LOGIN_SUCCESS:
      case actions.SIGNUP_SUCCESS:
        state.currentUser = action.payload.user;
        break;
      case actions.CLEAR_ERROR:
        state.error = undefined;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default reducer;
