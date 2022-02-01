import React from 'react';
import { List } from '@mui/material';
import ListItem from './todo-app-page-list-item';

const items = [
  { id: '1', title: 'Feel happy', done: false },
  { id: '2', title: 'Lick elbow', done: false },
  { id: '3', title: 'Kick cloud', done: true },
  { id: '4', title: 'Gain immortality', done: true },
  { id: '5', title: 'Make pople talk rational', done: true },
];

const TodoAppPageList = () => (
  <List>
    { items.map(({ id, title, done }) => (
      <ListItem key={id} title={title} done={done} />
    ))}
  </List>
);

export default TodoAppPageList;
