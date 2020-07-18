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

export const loginStart = () => action(LOGIN_START);

export const loginError = () => action(LOGIN_ERROR);

export const loginSuccess = (user: User) => action(LOGIN_SUCCESS, { user });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = (
  { email, password, callback }: { email: string, password: string, callback: VoidFunction },
): ThunkAction<void, RootState, unknown, Action> => (async (dispatch) => {
  dispatch(loginStart());
  try {
    const { token, user }: any = await request.post({
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
    console.error(err);
    dispatch(loginError());
  }
});
