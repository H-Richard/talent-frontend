/* eslint-disable no-param-reassign */
import produce from 'immer';
import type { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import type { ApplicationState } from './types';
import * as actions from './actions';

type ApplicationAction = ActionType<typeof actions>;

const initialState: ApplicationState = {
  applications: {},
};

export type ApplicationReducer = Reducer<ApplicationState, ApplicationAction>;

const reducer: ApplicationReducer = produce(
  (state: ApplicationState, action: ApplicationAction) => {
    switch (action.type) {
      case actions.SAVE_APPLICATIONS:
        state.applications = action.payload.apps;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default reducer;
