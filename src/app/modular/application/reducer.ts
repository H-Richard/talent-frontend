/* eslint-disable no-param-reassign */
import produce from 'immer';
import type { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import type { ApplicationState } from './types';
import * as actions from './actions';

type ApplicationAction = ActionType<typeof actions>;

const initialState: ApplicationState = {
  loading: false,
  applications: {},
};

export type ApplicationReducer = Reducer<ApplicationState, ApplicationAction>;

const reducer: ApplicationReducer = produce(
  (state: ApplicationState, action: ApplicationAction) => {
    switch (action.type) {
      case actions.LOADING_START:
        state.loading = true;
        break;
      case actions.LOADING_SUCCESS:
      case actions.LOADING_ERROR:
        state.loading = false;
        break;
      case actions.SAVE_APPLICATIONS:
        state.applications = action.payload.applications;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default reducer;
