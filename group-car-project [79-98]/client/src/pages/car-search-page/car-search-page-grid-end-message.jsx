import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Alert } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import pulse from '../../components/animations/pulse';

const GridEndMessage = () => (
  <Alert
    severity="success"
    variant="outlined"
    color="success"
    sx={{
      height: '70px', position: 'relative', display: 'flex', alignItems: 'center', border: 'none',
    }}
  >
    <p>Peržiūrėjote visus automobilius</p>
    <ScrollLink to="car-cards-container-top" smooth="true">
      <KeyboardArrowUpIcon sx={{
        height: '40px',
        width: 'auto',
        animation: `${pulse} 2s infinite`,
        color: 'grey.500',
        '&:hover': {
          color: 'common.white',
          transform: 'scale(1.2)',
          cursor: 'pointer',
          animation: 'none',
        },
        position: 'absolute',
        top: '5px',
        right: '5px',
      }}
      />
    </ScrollLink>
  </Alert>
);

export default GridEndMessage;
