import reducer, { ApplicationReducer } from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

interface ApplicationDuck {
  name: string
  actions: typeof actions
  selectors: typeof selectors
  reducer: ApplicationReducer
}

const duck: ApplicationDuck = {
  name: 'Application',
  actions,
  reducer,
  selectors,
};

export default duck;
