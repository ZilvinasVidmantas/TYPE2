import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos';
import user from './user';

// eslint-disable-next-line default-param-last
const mainReducer = combineReducers({
  todos,
  user,
});

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;

/*
  Įgalinti todo-item trinimą, paspaudus ant ištinimo mygtuko
*/
