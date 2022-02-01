import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';

// combineReducers- calls every child reducer, and gathers their results into a single state object
const mainReducer = combineReducers({
  auth,
});

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;
