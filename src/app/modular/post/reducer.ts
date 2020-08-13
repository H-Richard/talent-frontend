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
        // eslint-disable-next-line no-case-declarations
        const { post } = action.payload;
        state.posts[post.id] = post;
        state.loading = false;
        break;
      case actions.LOADING_SUCCESS:
        state.loading = false;
        break;
      case actions.LOADING_ERROR:
        state.loading = false;
        switch (action.payload.error.slice(-3)) {
          case '401':
            state.error = 'Unauthorized';
            break;
          default:
            state.error = action.payload.error;
            break;
        }
        break;
      case actions.CLEAR_ERROR:
        state.error = undefined;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default reducer;
