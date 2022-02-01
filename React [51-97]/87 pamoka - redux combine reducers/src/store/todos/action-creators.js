import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from './actions-types';

export const createAddTodoAction = (title) => ({
  type: ADD_TODO,
  payload: { title },
});

export const createDeleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const createUpdateTodoAction = (id) => ({
  type: UPDATE_TODO,
  payload: { id },
});

export default {
  createAddTodoAction,
  createDeleteTodoAction,
  createUpdateTodoAction,
};
