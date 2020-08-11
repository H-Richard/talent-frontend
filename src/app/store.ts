import {
  Store,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store: Store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
