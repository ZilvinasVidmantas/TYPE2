import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { v4 as newId } from 'uuid';

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
    case 'ADD_TODO': {
      const newTodo = {
        id: newId(),
        title: action.payload.title,
        done: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          done: todo.id === action.payload.id ? !todo.done : todo.done,
        })),
      };
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
