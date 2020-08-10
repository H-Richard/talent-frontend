/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';
import { PostState, Post } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const select = (state: RootState): PostState => state.auth as PostState;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const posts = (state: RootState): Post[] => Object.values(select(state).posts);

export const post = (state: RootState, id: number): Post | undefined => select(state).posts[id];
