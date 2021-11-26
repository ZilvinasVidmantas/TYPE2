import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/styles';
import Navbar from '../partials/navbar/navbar';

const MainContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.mixins.toolbar.height}px)`,
  display: 'flex',
  alignItems: 'stretch'
}));

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Box sx={{ flex: '0 0 840px' }}>{children}</Box>
        <Box sx={{ flexGrow: 1 }}>
        <iframe
          title="vilnius-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147552.08651305045!2d25.11295230284011!3d54.70080208729963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1slt!2slt!4v1637828202745!5m2!1slt!2slt"
          style={{ width: '100%', height: '100%', border: 'none'}}
          loading="lazy"></iframe>
        </Box>
      </MainContainer>
    </>
  )
}

export default PageLayout;
