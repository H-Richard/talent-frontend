import { action, Action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types';
import * as request from '../../../client';
import { saveJWT } from '../../../client/jwt';
import { User } from './types';
import { saveCurrentUser } from '../../../client/user';

export const LOGIN_START = 'auth/loginStart';
export const LOGIN_SUCCESS = 'auth/loginSuccess';
export const LOGIN_ERROR = 'auth/loginError';
export const CLEAR_ERROR = 'auth/clearError';

export const loginStart = () => action(LOGIN_START);

export const loginError = (error: string) => action(LOGIN_ERROR, { error });

export const loginSuccess = (user: User) => action(LOGIN_SUCCESS, { user });

export const clearError = () => action(CLEAR_ERROR);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = (
  { email, password, callback }: { email: string, password: string, callback: VoidFunction },
): ThunkAction<void, RootState, unknown, Action> => (async (dispatch) => {
  dispatch(loginStart());
  try {
    const { token, user }: any = await request.unauthenticatedRequest({
      method: 'POST',
      url: 'login',
      body: { email, password },
    });
    saveJWT(token);
    user.updatedAt = new Date(user.updatedAt);
    saveCurrentUser(user);
    dispatch(loginSuccess(user));
    callback();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    dispatch(loginError(err.message as string));
  }
});
