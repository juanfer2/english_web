import { combineReducers } from '@reduxjs/toolkit';
import healtReducer from './healt-reducer';
import userReducer from './user.reducer';

const rootReducers = combineReducers({
  healt: healtReducer,
  user: userReducer
});

export default rootReducers;
