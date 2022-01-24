import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
} from '@mui/material';

const ProfilePagePhoto = () => (
  <Box>
    <Box sx={{ pb: 5 }}>
      <Typography variant="h6">Profilio nuotrauka</Typography>
    </Box>
    <Box>
      <Grid container spacing={2} sx={{ pb: 5 }}>
        <Grid item xs={12} md={3}>
          <img src="https://picsum.photos/id/447/150/150" alt="user" style={{ borderRadius: '50%', height: '150px', width: '150px' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography sx={{ my: 1, pt: 2 }}>Redaguoti nuotrauką:</Typography>
          <Typography variant="body2">Įspėjimas apie max/ min nuotraukos dydį</Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button variant="outlined" sx={{ textTransform: 'none' }}>Įkelti iš kompiuterio</Button>
            <Button variant="outlined" sx={{ textTransform: 'none' }}>Ištrinti</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ProfilePagePhoto;
