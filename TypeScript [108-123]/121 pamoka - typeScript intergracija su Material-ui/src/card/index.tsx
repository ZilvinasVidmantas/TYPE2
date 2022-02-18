import * as React from 'react';
import {
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { PaletteColorNames } from '../types/theme-types';
import CardContainer from './card-container';

type CardProps = {
  title: string;
  text: string;
  bgcolor?: PaletteColorNames
};

const Card: React.FC<CardProps> = ({ title, text, bgcolor }) => {
  return (
    <CardContainer bgcolor={bgcolor} elevation={4}>
      <Typography sx={{ p: '1rem', fontSize: '1.4rem', textTransform: 'capitalize' }} >{title}</Typography>
      <Divider />
      <Box sx={{ p: '1rem' }}>{text}</Box>
    </CardContainer>
  );
};

export default Card;
