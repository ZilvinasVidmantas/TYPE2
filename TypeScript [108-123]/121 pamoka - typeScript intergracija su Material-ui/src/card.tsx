import * as React from 'react';
import {
  Paper,
  Typography,
  Divider,
  Box,
  styled,
  PaperProps,
} from '@mui/material';
import { PaletteColorNames} from './types/theme-types';

type CardProps = {
  title: string;
  text: string;
  bgcolor?: PaletteColorNames
};

type CardContainerProps = PaperProps & { bgcolor?: PaletteColorNames };

type CardContainerType = React.FC<CardContainerProps>;

const CardContainer = styled(Paper)<CardContainerProps>(({ theme, bgcolor }) => ({
  width: 200,
  borderRadius: 4,
  display: 'inline-block',
  bgcolor: bgcolor && theme.palette[bgcolor].main,
})) as CardContainerType;

const Card: React.FC<CardProps> = ({ title, text, bgcolor }) => {
  return (
    <CardContainer bgcolor={bgcolor}>
      <Typography sx={{ p: '1rem', fontSize: '1.4rem', textTransform: 'capitalize' }} >{title}</Typography>
      <Divider />
      <Box sx={{ p: '1rem' }}>{text}</Box>
    </CardContainer>
  );
};

export default Card;
