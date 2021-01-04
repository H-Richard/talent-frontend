/* eslint-disable no-restricted-syntax */
import { action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types';
import { Applications } from './types';
import * as request from '../../../client';

export const SAVE_APPLICATIONS = 'applications/saveApplications';

export const saveApplications = (apps: Applications) => action(SAVE_APPLICATIONS, { apps });

export const getApplications = ():
ThunkAction<void, RootState, null, any> => (async (dispatch) => {
  try {
    const res = await request.get({
      url: 'applications',
    });
    const applications: Applications = {};
    for (const application of res) {
      application.applicant.updatedAt = new Date(application.applicant.updatedAt);
      application.appliedAt = new Date(application.appliedAt);
      applications[application.id] = application;
    }
    dispatch(saveApplications(applications));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});
