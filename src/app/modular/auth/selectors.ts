/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';

import type { AuthState } from './types';

const select = (state: RootState): AuthState => state.auth as AuthState;

export const loading = (state: RootState): boolean => select(state).loading;

export const loggedIn = (state: RootState): boolean => select(state).loggedIn;

export const error = (state: RootState): string | undefined => select(state).error;
