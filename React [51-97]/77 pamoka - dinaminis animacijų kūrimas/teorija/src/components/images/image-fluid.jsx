import React from 'react';
import { styled } from '@mui/material';

const Component = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt ?? 'No SEO'} {...props} />
}

const ImageFluid = styled(Component)(({ directions }) => {
  const { x, y } = {
    y: directions?.y ?? true,
    x: directions?.x ?? true,
  }

  return {
    width: x ? '100%' : 'auto',
    height: y ? '100%' : 'auto',
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

export default ImageFluid;
