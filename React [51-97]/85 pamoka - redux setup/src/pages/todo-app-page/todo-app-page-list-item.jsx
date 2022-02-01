import React from 'react';
import { useDispatch } from 'react-redux';
import {
  styled, ListItem, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ListItemText from './todo-app-page-list-item-text';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  ':nth-of-type(2n)': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const TodoAppPageListItem = ({ id, title, done }) => {
  const dispatch = useDispatch();

  const handleDeleteIconClick = () => {
    dispatch({
      type: 'DELETE_TODO',
      payload: { id },
    });
  };

  return (
    <StyledListItem
      secondaryAction={(
        <>
          <IconButton edge="end" aria-label="delete" color={done ? 'warning' : 'success'}>
            { done ? <ClearIcon /> : <CheckIcon />}
          </IconButton>
          <IconButton edge="end" aria-label="delete" color="error" onClick={handleDeleteIconClick}>
            <DeleteIcon />
          </IconButton>
        </>
)}
    >
      <ListItemText title={title} done={done} />
    </StyledListItem>
  );
};

export default TodoAppPageListItem;
