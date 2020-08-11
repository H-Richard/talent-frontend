/* eslint-disable no-restricted-syntax */
import { action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types';
import { Posts } from './types';
import * as request from '../../../client';

export const LOADING_START = 'post/loadingStart';
export const SAVE_POSTS = 'post/savePosts';
export const LOADING_SUCCESS = 'post/loadingSuccess';
export const LOADING_ERROR = 'post/loadingError';

export const loadingStart = () => action(LOADING_START);

export const savePosts = (posts: Posts) => action(SAVE_POSTS, { posts });

export const loadingError = () => action(LOADING_ERROR);

export const loadingSuccess = () => action(LOADING_SUCCESS);

export const getPosts = ():
ThunkAction<void, RootState, null, any> => (async (dispatch) => {
  try {
    const res = await request.unauthenticatedRequest({
      method: 'GET',
      url: 'posts',
    });
    const posts : Posts = {};
    for (const post of res) {
      post.updatedAt = new Date(post.updatedAt);
      post.createdAt = new Date(post.createdAt);
      post.expiresAt = new Date(post.expiresAt);
      post.author.updatedAt = new Date(post.author.updatedAt);
      posts[post.id] = post;
    }
    dispatch(savePosts(posts));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});
