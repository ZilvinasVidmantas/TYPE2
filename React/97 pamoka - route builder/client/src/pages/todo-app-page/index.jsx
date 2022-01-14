import React from 'react';
import { Typography } from '@mui/material';
import Container from './todo-app-page-container';
import AddTodoGroup from './todo-app-page-add-todo-group';
import List from './todo-app-page-list';

const TodoAppPage = () => (
  <Container component="main">
    <Typography component="h1" variant="h3" gutterBottom>Todo app</Typography>
    <AddTodoGroup />
    <List />
  </Container>
);

export default TodoAppPage;
