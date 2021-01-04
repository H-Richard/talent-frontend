/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';
import { ApplicationState, Application } from './types';

const select = (state: RootState): ApplicationState => state.application as ApplicationState;

export const apps = (state: RootState): Application[] => Object.values(select(state).applications);
