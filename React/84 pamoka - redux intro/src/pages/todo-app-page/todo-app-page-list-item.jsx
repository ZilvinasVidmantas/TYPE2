import React from 'react';
import {
  styled, ListItem, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ListItemText from './todo-app-page-list-item-text';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  ':nth-child(2n)': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const TodoAppPageListItem = ({ title, done }) => (
  <StyledListItem
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
    <ListItemText title={title} done={done} />
  </StyledListItem>
);

export default TodoAppPageListItem;
