import React, { useRef } from 'react';
import {
  Grid, Avatar, Typography, Box,
} from '@mui/material';
import CarPageAction from './car-page-action';
import SlideOnMount from '../../components/animations/slide-on-mount';

const CarPageAnimatedContactContainer = ({
  fullname,
  userInitials,
  actions,
  delayProgress,
}) => {
  const containerRef = useRef(null);
  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: 'hidden',
        justifyContent: 'center',
        gap: 1,
        textAlign: 'center',
      }}
    >
      <SlideOnMount
        direction="up"
        ref={containerRef}
        progressive={delayProgress}
      >
        <Grid container sx={{ flexDirection: { lg: 'column' }, alignItems: { lg: 'center' } }}>
          <Grid
            item
            xs={6}
            sm
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>{userInitials}</Avatar>
            <Typography variant="h6">{fullname}</Typography>
          </Grid>
          <Grid item xs={6} sm>
            {actions.map(({ href, type, btnText }) => (
              <CarPageAction
                key={href}
                href={href}
                type={type}
                btnText={btnText}
              />
            ))}
          </Grid>
        </Grid>
      </SlideOnMount>
    </Box>
  );
};

export default CarPageAnimatedContactContainer;
