import React, { FormEventHandler } from 'react';
import {
  TextField,
  Grid,
  Container,
  Box,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthService from '../../services/auth-service';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../app/features/auth-slice';

const formControlMixin = {
  height: 56,
};

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.login({
        email: 'admin@gmail.com',
        password: 'Vilnius123'
      });
      const reduxAction = login(user);
      dispatch(reduxAction);
    }
    catch (err) {
      console.log(err.message ? err.message : err);
    }
  };

  return (
    <Container
      maxWidth="xs"
      component="main"
      sx={{ pt: '7vh' }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{
          mb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Login</Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="email"
              variant="outlined"
              label="El. paštas"
              fullWidth
              autoComplete="email"
              InputProps={{ sx: formControlMixin }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <TextField
              name="password"
              variant="outlined"
              label="Slaptažodis"
              type="password"
              fullWidth
              InputProps={{ sx: formControlMixin }}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={formControlMixin}
          type="submit"
        >
          Login
        </Button>
      </Box>
    </Container>

  );
};

export default LoginPage;
