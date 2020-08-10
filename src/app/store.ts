import {
  Store,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import reducer from './reducer';
import { RootState } from './types';

const store: Store = createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, any>),
);

export default store;
