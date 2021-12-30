import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box, TextField } from '@mui/material';
import { createAddTodoAction } from '../../store/action-creators';

const TodoAppPageAddTodoGroup = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAddTodoAction(todoTitle));
    setTodoTitle('');
  };

  return (
    <Box
      sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        label="What to do?"
        variant="filled"
        size="small"
        sx={{ flexGrow: 1 }}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <Button variant="outlined" size="large" type="submit">Add</Button>
    </Box>
  );
};

export default TodoAppPageAddTodoGroup;
