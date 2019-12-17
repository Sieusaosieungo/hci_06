import { combineReducers } from 'redux';

import modal from './reducers/modal';
import global from './reducers/global';
import taskDetail from './reducers/taskDetail';

const rootReducer = combineReducers({
  modal,
  global,
  taskDetail
});

export default rootReducer;
