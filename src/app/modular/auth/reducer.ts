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
        state.loading = true;
        break;
      case actions.LOGIN_ERROR:
        state.loading = false;
        break;
      case actions.LOGIN_SUCCESS:
        state.currentUser = action.payload.user;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default reducer;
