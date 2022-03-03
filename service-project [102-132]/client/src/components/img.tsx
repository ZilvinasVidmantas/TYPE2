import { styled } from '@mui/material';

const Img = styled('img')(({ height, width }) => ({
  height: height ?? 200,
  width: width ?? 200,
  objectFit: 'cover',
  objectPosition: 'center',
}));

export default Img;
