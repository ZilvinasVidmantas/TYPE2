import React from 'react';
import {
  Button, Box, Typography, TextField, styled, ListItem, IconButton, ListItemText, List, Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const TodoAppContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 0),
}));

const TodoAppListItem = styled(ListItem)(({ theme }) => ({
  ':nth-child(2n)': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const TodoItemListItemText = styled(ListItemText)({
  '&.done>span': {
    textDecoration: 'line-through',
  },
});

const items = [
  { id: '1', title: 'Feel happy', done: false },
  { id: '2', title: 'Lick elbow', done: false },
  { id: '3', title: 'Kick cloud', done: true },
  { id: '4', title: 'Gain immortality', done: true },
  { id: '5', title: 'Make pople talk rational', done: true },
];

const TodoAppPage = () => (
  <TodoAppContainer component="main">
    <Paper
      elevation={3}
      sx={{
        width: 400, p: 2, mx: 'auto', mt: 8,
      }}
    >
      <Typography component="h1" variant="h3" gutterBottom>Todo app</Typography>
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1,
      }}
      >
        <TextField label="What to do?" variant="filled" size="small" sx={{ flexGrow: 1 }} />
        <Button variant="outlined" size="large">Add</Button>
      </Box>
      <List>
        { items.map(({ id, title, done }) => (
          <TodoAppListItem
            key={id}
            secondaryAction={(
              <>
                <IconButton edge="end" aria-label="delete" color={done ? 'warning' : 'success'}>
                  { done ? <ClearIcon /> : <CheckIcon />}
                </IconButton>
                <IconButton edge="end" aria-label="delete" color="error">
                  <DeleteIcon />
                </IconButton>
              </>
                  )}
          >
            <TodoItemListItemText
              className={done && 'done'}
              primary={title}
            />
          </TodoAppListItem>
        ))}
      </List>
    </Paper>
  </TodoAppContainer>
);

export default TodoAppPage;
