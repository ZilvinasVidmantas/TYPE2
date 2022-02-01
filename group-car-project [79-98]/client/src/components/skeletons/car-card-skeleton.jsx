import React from 'react';
import { Grid, Skeleton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const CarCardSkeleton = ({ skeletonsAmount }) => (
  <Grid container spacing={2} sx={{ mb: 2, p: 2 }}>
    {Array.from(new Array(skeletonsAmount)).map(() => (
      <Grid key={uuidv4()} item xs={12} md={6} lg={4} xl={4}>
        <Skeleton variant="rectangular" height="230px" sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
        <Skeleton height="40px" />
        <Skeleton />
      </Grid>
    ))}
  </Grid>
);
export default CarCardSkeleton;
