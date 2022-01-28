import React, { useState } from 'react';
import {
  styled,
  Button,
  Box,
} from '@mui/material';

const StyledMainImage = styled('img')({
  borderRadius: '50%',
  height: '250px',
  width: '250px',
  objectFit: 'cover',
});

const MainImage = ({ mainImg }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <Box sx={{
      display: { xs: 'flex' },
      flexDirection: { xs: 'column' },
      alignItems: { xs: 'center' },
      gap: 2,
      backgroundColor: openModal ? 'red' : 'none',
    }}
    >
      <StyledMainImage
        src={(mainImg && mainImg.src) ?? '/no-image.jpg'}
        alt="user"
      />
      <Button variant="outlined" size="large" onClick={toggleModal}>Keisti</Button>
    </Box>
  );
};

export default MainImage;
