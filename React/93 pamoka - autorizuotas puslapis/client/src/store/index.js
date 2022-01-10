import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos';
import auth from './auth';

const mainReducer = combineReducers({
  todos,
  auth,
});

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;
