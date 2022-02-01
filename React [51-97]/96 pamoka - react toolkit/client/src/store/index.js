import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todos from './todos';
import auth from './auth';

const reducer = combineReducers({ todos, auth });

const store = configureStore({ reducer });

export default store;
