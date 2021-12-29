import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import ListItem from './todo-app-page-list-item';

const TodoAppPageList = () => {
  const items = useSelector((state) => state.todos);

  return (
    <List>
      { items.map(({ id, title, done }) => (
        <ListItem key={id} id={id} title={title} done={done} />
      ))}
    </List>
  );
};

export default TodoAppPageList;
