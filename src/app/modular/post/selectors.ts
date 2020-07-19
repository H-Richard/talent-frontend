/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';

import type { PostState } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const select = (state: RootState): PostState => state.auth as PostState;
