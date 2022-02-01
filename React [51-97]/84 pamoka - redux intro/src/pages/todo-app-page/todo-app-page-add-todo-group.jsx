import React from 'react';
import { Button, Box, TextField } from '@mui/material';

const TodoAppPageAddTodoGroup = () => (
  <Box sx={{
    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
  }}
  >
    <TextField label="What to do?" variant="filled" size="small" sx={{ flexGrow: 1 }} />
    <Button variant="outlined" size="large">Add</Button>
  </Box>
);

export default TodoAppPageAddTodoGroup;
