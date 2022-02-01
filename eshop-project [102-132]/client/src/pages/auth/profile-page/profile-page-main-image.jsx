import React, { useState } from 'react';
import {
  styled,
  Button,
  Box,
} from '@mui/material';
import Modal from '@components/modal';
import ImageGrid from './profile-page-image-grid';

const StyledMainImage = styled('img')({
  borderRadius: '50%',
  height: '250px',
  width: '250px',
  objectFit: 'cover',
});

const MainImage = ({ mainImg, imgData }) => {
  const [open, setOpen] = useState(false);

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
        <Box sx={{ width: '50vw' }}>
          <ImageGrid
            imgData={imgData}
            columns={4}
            handleSelectImage={(id) => {
              console.log('Gavau id:', id);
              console.log('Padarysiu ją pagrindine siunčiant užklausą');
              handleClose();
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default MainImage;
