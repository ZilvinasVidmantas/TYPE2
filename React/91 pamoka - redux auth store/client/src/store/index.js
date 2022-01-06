import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos';
import auth from './auth';

// eslint-disable-next-line default-param-last
const mainReducer = combineReducers({
  todos,
  auth,
});

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;

/*
  Įgalinti todo-item trinimą, paspaudus ant ištinimo mygtuko
*/
