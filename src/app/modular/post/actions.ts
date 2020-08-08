import { action, Action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types';
import * as request from '../../../client';

export const LOADING_START = 'post/loadingStart';
export const LOADING_SUCCESS = 'post/loadingSuccess';
export const LOADING_ERROR = 'post/loadingError';

export const loadingStart = () => action(LOADING_START);

export const loadingError = () => action(LOADING_ERROR);

export const loadingSuccess = () => action(LOADING_SUCCESS);

export const getPosts = (): ThunkAction<void, RootState, unknown, Action> => (async (dispatch) => {
  dispatch(loadingStart());
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const posts: any = await request.unauthenticatedRequest({
      method: 'GET',
      url: 'posts',
    });
    // Save posts in store
    dispatch(loadingSuccess());
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    dispatch(loadingError());
  }
});
