import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './auth';
import categories from './categories';
import cities from './cities';
import userServices from './user-services';

const reducer = combineReducers({
  auth,
  categories,
  cities,
  userServices,
});

const store = configureStore({ reducer });

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
