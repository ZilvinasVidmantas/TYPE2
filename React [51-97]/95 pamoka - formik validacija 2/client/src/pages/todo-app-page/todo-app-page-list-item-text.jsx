import React from 'react';
import { styled, ListItemText } from '@mui/material';

const StyledListItemText = styled(ListItemText)({
  '&.done>span': {
    textDecoration: 'line-through',
  },
});
const TodoAppPageListItemText = ({ title, done }) => (
  <StyledListItemText
    className={done && 'done'}
    primary={title}
  />
);

export default TodoAppPageListItemText;
