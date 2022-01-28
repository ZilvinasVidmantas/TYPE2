import React, { useState } from 'react';
import {
  styled,
  Button,
  Box,
} from '@mui/material';
import Modal from '@components/modal';

const StyledMainImage = styled('img')({
  borderRadius: '50%',
  height: '250px',
  width: '250px',
  objectFit: 'cover',
});

const MainImage = ({ mainImg }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{
      display: { xs: 'flex' },
      flexDirection: { xs: 'column' },
      alignItems: { xs: 'center' },
      gap: 2,
    }}
    >
      <StyledMainImage
        src={(mainImg && mainImg.src) ?? '/no-image.jpg'}
        alt="user"
      />
      <Button variant="outlined" size="large" onClick={handleOpen}>Keisti</Button>
      <Modal open={open} onClose={handleClose}>
        Turinys 3000
      </Modal>
    </Box>
  );
};

export default MainImage;
