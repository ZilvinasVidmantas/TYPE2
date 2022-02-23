import React from 'react';
import { Paper, Box } from '@mui/material';
import CardContainer, { CardContainerProps } from './flipping-card-container';

export type FlippingCardProps = CardContainerProps & {
  FrontComponent: React.FC,
  BackComponent: React.FC,
};

const FlippingCard: React.FC<FlippingCardProps> = ({
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
