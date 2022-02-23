import React from 'react';
import { Paper, Box, styled } from '@mui/material';

const CardContainer = styled(Box)(({ theme, verticalFlip }) => ({
  perspective: 600,
  ':hover>.card': {
    transform: `rotate${verticalFlip ? 'X' : 'Y'}(-180deg)`,
  },
  '&>.card': {
    transformStyle: 'preserve-3d',
    position: 'relative',
    height: '100%',
    width: '100%',
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.slow,
    }),
  },
  '& .front, & .back': {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    '&>*': {
      height: '100%',
      width: '100%',
    },
  },
  '& .front': {
    backgroundColor: 'red',
  },
  '& .back': {
    transform: `rotate${verticalFlip ? 'X' : 'Y'}(180deg)`,
    backgroundColor: 'blue',
  },
}));

const FlippingCard = ({
  FrontComponent,
  BackComponent,
  verticalFlip = false,
  ...props
}) => (
  <CardContainer {...props} verticalFlip={verticalFlip}>
    <Paper className="card" elevation={4}>
      <Box className="front">
        <FrontComponent />
      </Box>
      <Box className="back">
        <BackComponent />
      </Box>
    </Paper>
  </CardContainer>
);

export default FlippingCard;
