import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import UserCars from './user-dashboard-user-cars';
import LikedCars from './user-dashboard-liked-cars';
import Profile from './user-dashboard-profile';

const UserDashboard = () => (
  <Container sx={{ my: 4, width: '100%', overflowX: 'hidden' }}>
    <Toolbar />
    <Typography component="h3" variant="h6" sx={{ mb: 4 }}>
      Labas, vartojoVardas
    </Typography>
    <Grid container spacing={3}>
      {/* automobiliai */}
      <Grid item xs={11} md={8}>
        <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
          <UserCars />
        </Paper>
        <Paper sx={{
          p: 1,
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <LikedCars />
        </Paper>
      </Grid>
      <Grid item xs={11} md={4}>
        <Grid sx={{ height: '100%' }}>
          <Profile />
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default UserDashboard;
