/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';

import type { AuthState } from './types';

const select = (state: RootState): AuthState => state.auth as AuthState;

export const loading = (state: RootState): boolean => select(state).loading;
