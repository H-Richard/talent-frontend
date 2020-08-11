/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';
import { PostState, Post } from './types';

const select = (state: RootState): PostState => state.auth as PostState;

export const posts = (state: RootState): Post[] => Object.values(select(state).posts);

export const post = (state: RootState, id: number): Post | undefined => select(state).posts[id];
