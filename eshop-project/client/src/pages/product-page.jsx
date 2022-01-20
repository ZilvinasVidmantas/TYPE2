import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  return (
    <Typography>
      ProductPage -
      {' '}
      {id}
    </Typography>
  );
};

export default ProductPage;
