import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import types from './types';
import myCards from './myCards';

const rootReducer = combineReducers({
  user,
  flash,
  types,
  myCards
});

export default rootReducer;
