/* eslint-disable no-restricted-syntax */
import { action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../types';
import { Posts, Post } from './types';
import * as request from '../../../client';

export const LOADING_START = 'post/loadingStart';
export const SAVE_POSTS = 'post/savePosts';
export const LOADING_SUCCESS = 'post/loadingSuccess';
export const LOADING_ERROR = 'post/loadingError';
export const ADD_POST = 'post/addPost';
export const CLEAR_ERROR = 'post/clearError';

export const loadingStart = () => action(LOADING_START);

export const savePosts = (posts: Posts) => action(SAVE_POSTS, { posts });

export const loadingError = (error: string) => action(LOADING_ERROR, { error });

export const loadingSuccess = () => action(LOADING_SUCCESS);

export const addPost = (post: Post) => action(ADD_POST, { post });

export const clearError = () => action(CLEAR_ERROR);

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

export const createPost = ({
  title,
  description,
  desirements,
  requirements,
}: {
  title: string,
  description: string,
  desirements: string[],
  requirements: string[],
}): ThunkAction<void, RootState, null, any> => (async (dispatch) => {
  dispatch(loadingStart());
  try {
    const res: any = await request.post({
      url: 'posts',
      body: {
        title,
        description,
        desirements,
        requirements,
      },
    });
    res.updatedAt = new Date(res.updatedAt);
    res.createdAt = new Date(res.createdAt);
    res.expiresAt = new Date(res.expiresAt);
    res.author.updatedAt = new Date(res.author.updatedAt);
    dispatch(addPost(res));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    dispatch(loadingError(err.message as string));
  }
});
