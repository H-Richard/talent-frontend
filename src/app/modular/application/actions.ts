/* eslint-disable no-restricted-syntax */
import { action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types';
import { Applications } from './types';
import * as request from '../../../client';

export const LOADING_START = 'application/loadingStart';
export const LOADING_SUCCESS = 'application/loadingSuccess';
export const LOADING_ERROR = 'application/loadingError';
export const SAVE_APPLICATIONS = 'application/saveApplications';

export const loadingStart = () => action(LOADING_START);

export const loadingSuccess = () => action(LOADING_SUCCESS);

export const loadingError = () => action(LOADING_ERROR);

export const saveApplications = (applications: Applications) => action(
  SAVE_APPLICATIONS,
  { applications },
);

export const getApplications = (): ThunkAction<void, RootState, null, any> => (async (dispatch) => {
  try {
    const res = await request.get({ url: '/applications' });
    const applications: Applications = {};
    for (const application of res) {
      application.appliedAt = new Date(application.appliedAt);
      applications[application.id] = application;
    }
    dispatch(saveApplications(applications));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});
