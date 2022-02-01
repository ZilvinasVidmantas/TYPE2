import React from 'react';
import { Typography } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const NotFound = () => (
  <BackgroundImageContainer
    sx={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.9)) , url(https://c.tenor.com/XPVJOB_KaNwAAAAC/russia-car.gif)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: {
        xs: '15vw',
        sm: '10vw',
        md: '8vw',
        lg: '10vw',
      },
      color: 'common.white',
    }}
  >
    <WarningRoundedIcon sx={{ fontSize: 'inherit', color: 'secondary.main' }} />
    <Typography sx={{
      fontSize: 'inherit',
      fontWeight: 500,
      lineHeight: '80%',
      mb: 3,
    }}
    >
      404
    </Typography>
    <Typography
      variant="h3"
      component="h1"
      sx={{
        textTransform: 'uppercase',
        fontSize: {
          xs: '6vw',
          md: '4vw',
          lg: '3vw',
        },
        mb: 5,
      }}
    >
      Ups! Toks puslapis nerastas
    </Typography>
  </BackgroundImageContainer>
);

export default NotFound;
