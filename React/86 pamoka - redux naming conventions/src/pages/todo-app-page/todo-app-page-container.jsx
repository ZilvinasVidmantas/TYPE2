import React from 'react';
import { Box, styled, Paper } from '@mui/material';

const StyledTodoAppPageContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 0),
}));

const TodoAppPageContainer = ({ children }) => (
  <StyledTodoAppPageContainer component="main">
    <Paper
      elevation={3}
      sx={{
        width: 400, p: 2, mx: 'auto', mt: 8,
      }}
    >
      {children}
    </Paper>
  </StyledTodoAppPageContainer>
);

export default TodoAppPageContainer;
