import { combineReducers } from 'redux';

import authDuck from './modular/auth';
import postDuck from './modular/post';

const reducer = combineReducers({
  [authDuck.name]: authDuck.reducer,
  [postDuck.name]: postDuck.reducer,
});

export default reducer;
