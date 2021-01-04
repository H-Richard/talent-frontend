/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';
import { ApplicationState, Application } from './types';

const select = (state: RootState): ApplicationState => state.application as ApplicationState;

export const applications = (state: RootState): Application[] => (
  Object.values(select(state).applications)
);

export const application = (state: RootState, id: number): Application | undefined => (
  select(state).applications[id]
);
