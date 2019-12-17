import { combineReducers } from 'redux';

import modal from './reducers/modal';
import global from './global';

const rootReducer = combineReducers({
  modal,
  global
});

export default rootReducer;
