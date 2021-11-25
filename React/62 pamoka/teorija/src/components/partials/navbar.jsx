import React from 'react';
import { styled } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: `0 1px 0 ${theme.palette.grey.A150}`,
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" color="transparent" elevation={0}>
        <Toolbar>

        </Toolbar>
      </StyledAppBar>
    </Box>
  )
};

export default Navbar;
