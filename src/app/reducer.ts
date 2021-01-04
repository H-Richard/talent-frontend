import { combineReducers } from 'redux';

import authDuck from './modular/auth';
import postDuck from './modular/post';
import applicationsDuck from './modular/application';

const reducer = combineReducers({
  [authDuck.name]: authDuck.reducer,
  [postDuck.name]: postDuck.reducer,
  [applicationsDuck.name]: applicationsDuck.reducer,
});

export default reducer;
