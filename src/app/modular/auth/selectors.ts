import { RootState } from '../../types';

import type { AuthState } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const select = (state: RootState): AuthState => state.auth as AuthState;
