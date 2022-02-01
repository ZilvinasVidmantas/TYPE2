/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as newId } from 'uuid';

const initialState = {
  items: [
    { id: '1', title: 'Feel happy', done: false },
    { id: '2', title: 'Lick elbow', done: false },
    { id: '3', title: 'Kick cloud', done: true },
    { id: '4', title: 'Gain immortality', done: true },
    { id: '5', title: 'Make pople talk rational', done: true },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo({ items }, action) {
      const newTodo = {
        id: newId(),
        title: action.payload,
        done: false,
      };
      items.push(newTodo);
    },
    deleteTodo({ items }, action) {
      const itemToDeleteIndex = items.findIndex(({ id }) => id === action.payload);
      items.splice(itemToDeleteIndex, 1);
    },
    updateTodo({ items }, action) {
      const itemToUpdate = items.find(({ id }) => id === action.payload);
      itemToUpdate.done = !itemToUpdate.done;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export const todosSelector = (state) => state.todos.items;

export default todosSlice.reducer;
