import { v4 as newId } from 'uuid';
import produce from 'immer';
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from './actions-types';

const initState = {
  items: [
    { id: '1', title: 'Feel happy', done: false },
    { id: '2', title: 'Lick elbow', done: false },
    { id: '3', title: 'Kick cloud', done: true },
    { id: '4', title: 'Gain immortality', done: true },
    { id: '5', title: 'Make pople talk rational', done: true },
  ],
};

// eslint-disable-next-line default-param-last
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, ({ items }) => {
        const newTodo = {
          id: newId(),
          title: action.payload.title,
          done: false,
        };
        items.push(newTodo);
      });
    case DELETE_TODO:
      return produce(state, ({ items }) => {
        const itemToDeleteIndex = items.findIndex(({ id }) => id === action.payload.id);
        items.splice(itemToDeleteIndex, 1);
      });
    case UPDATE_TODO:
      return produce(state, ({ items }) => {
        const itemToUpdate = items.find(({ id }) => id === action.payload.id);
        itemToUpdate.done = !itemToUpdate.done;
      });
    default:
      return state;
  }
};

export default reducer;
