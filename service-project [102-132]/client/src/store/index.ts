import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './auth';
import categories from './categories';
import cities from './cities';

const reducer = combineReducers({
  auth,
  categories,
  cities,
});

const store = configureStore({ reducer });

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
