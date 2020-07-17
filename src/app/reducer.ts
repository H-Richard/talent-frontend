import { combineReducers } from 'redux';

import authDuck from './modular/auth';

const reducer = combineReducers({
  [authDuck.name]: authDuck.reducer,
});

export default reducer;
