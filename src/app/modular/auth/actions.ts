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
export const SIGNUP_START = 'auth/signupStart';
export const SIGNUP_SUCCESS = 'auth/signupSuccess';
export const SIGNUP_ERROR = 'auth/signupError';

export const loginStart = () => action(LOGIN_START);

export const loginError = (error: string) => action(LOGIN_ERROR, { error });

export const loginSuccess = (user: User) => action(LOGIN_SUCCESS, { user });

export const clearError = () => action(CLEAR_ERROR);

export const signupStart = () => action(SIGNUP_START);

export const signupSuccess = (user: User) => action(SIGNUP_SUCCESS, { user });

export const signupError = (error: string) => action(SIGNUP_ERROR, { error });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = (
  {
    email,
    password,
    onLoginSuccess,
    onLoginFailure,
  }: {
    email: string,
    password: string,
    onLoginSuccess: VoidFunction,
    onLoginFailure: VoidFunction
  },
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
    onLoginSuccess();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    dispatch(loginError(err.message as string));
    onLoginFailure();
  }
});

export const signup = (
  {
    firstName,
    lastName,
    email,
    password,
    onSignupSuccess,
    onSignupFailure,
  }:
  {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    onSignupSuccess: VoidFunction,
    onSignupFailure: VoidFunction
  },
): ThunkAction<void, RootState, unknown, Action> => (async (dispatch) => {
  dispatch(signupStart());
  try {
    const { token, user }: any = await request.unauthenticatedRequest({
      method: 'POST',
      url: 'users',
      body: {
        firstName, lastName, email, password,
      },
    });
    saveJWT(token);
    user.updatedAt = new Date(user.updatedAt);
    saveCurrentUser(user);
    dispatch(signupSuccess(user));
    onSignupSuccess();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    dispatch(signupError(err.message as string));
    onSignupFailure();
  }
});
