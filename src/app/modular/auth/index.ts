import reducer, { AuthReducer } from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

interface AuthDuck {
  name: string
  actions: typeof actions
  selectors: typeof selectors
  reducer: AuthReducer
}

const duck: AuthDuck = {
  name: 'auth',
  actions,
  reducer,
  selectors,
};

export default duck;
