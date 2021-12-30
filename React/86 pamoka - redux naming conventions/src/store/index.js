import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { v4 as newId } from 'uuid';
import produce from 'immer';
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from './actions-types';

const initState = {
  todos: [
    { id: '1', title: 'Feel happy', done: false },
    { id: '2', title: 'Lick elbow', done: false },
    { id: '3', title: 'Kick cloud', done: true },
    { id: '4', title: 'Gain immortality', done: true },
    { id: '5', title: 'Make pople talk rational', done: true },
  ],
};

// eslint-disable-next-line default-param-last
const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return produce(state, ({ todos }) => {
        const newTodo = {
          id: newId(),
          title: action.payload.title,
          done: false,
        };
        todos.push(newTodo);
      });
    }
    case DELETE_TODO:
      return produce(state, ({ todos }) => {
        const itemToDeleteIndex = todos.findIndex(({ id }) => id === action.payload.id);
        todos.splice(itemToDeleteIndex, 1);
      });
    case UPDATE_TODO:

      return produce(state, ({ todos }) => {
        const itemToUpdate = todos.find(({ id }) => id === action.payload.id);
        itemToUpdate.done = !itemToUpdate.done;
      });
    default:
      return state;
  }
};

const store = createStore(
  mainReducer,
  composeWithDevTools(),
);

export default store;

/*
  Įgalinti todo-item trinimą, paspaudus ant ištinimo mygtuko
*/
