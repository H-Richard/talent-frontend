/* eslint-disable no-param-reassign */
import produce from 'immer';
import type { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import type { PostState } from './types';
import * as actions from './actions';

type PostAction = ActionType<typeof actions>;

const initialState: PostState = {
  loading: false,
  posts: {},
};

export type PostReducer = Reducer<PostState, PostAction>;

const reducer: PostReducer = produce(
  (state: PostState, action: PostAction) => {
    switch (action.type) {
      case actions.LOADING_START:
        state.loading = true;
        break;
      case actions.SAVE_POSTS:
        state.posts = action.payload.posts;
        break;
      case actions.ADD_POST:
        state.posts[action.payload.post.id] = action.payload.post;
        break;
      case actions.LOADING_SUCCESS:
      case actions.LOADING_ERROR:
        state.loading = false;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default reducer;
