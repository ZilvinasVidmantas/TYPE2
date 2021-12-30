import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box, TextField } from '@mui/material';

const TodoAppPageAddTodoGroup = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        title: todoTitle,
      },
    });
    setTodoTitle('');
  };

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
    }}
    >
      <TextField
        label="What to do?"
        variant="filled"
        size="small"
        sx={{ flexGrow: 1 }}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <Button variant="outlined" size="large" onClick={handleAddButtonClick}>Add</Button>
    </Box>
  );
};

export default TodoAppPageAddTodoGroup;
