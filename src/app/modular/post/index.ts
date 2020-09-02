import reducer, { PostReducer } from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

interface PostDuck {
  name: string
  actions: typeof actions
  selectors: typeof selectors
  reducer: PostReducer
}

const duck: PostDuck = {
  name: 'post',
  actions,
  reducer,
  selectors,
};

export default duck;
