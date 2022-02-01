import React from 'react';
import { styled } from '@mui/styles';
import { AppBar, Box, Toolbar } from '@mui/material';
import Header from './header';
import Filters from './filters';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: `0 1px 0 ${theme.palette.grey.A150}`,
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Box sx={{ height: 80, flexShrink: 0 }}>
            <Header />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Filters />
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  )
};

export default Navbar;
