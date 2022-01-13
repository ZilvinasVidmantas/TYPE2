import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Alert,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';
import AuthForm from '../components/auth-form';
import ApiService from '../services/api-service';

/*
  Pagal register-page.jsx pavyzdį įgalinkite formik validacijas:
    email: privalomas paštas
    password: privalomas

  Teisingai suvedus laukus, padaryti 'Prisijungti' mygtuką aktyvų
*/

const LoginPage = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const { user, token } = await ApiService.login({
          email,
          password,
        });
        const redirectTo = urlSearchParams.get('redirectTo');
        const loginSuccessAction = login({
          user,
          token,
          redirectTo,
        });
        dispatch(loginSuccessAction);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
  };

  return (
    <AuthForm
      title="Prisijungti"
      linkTo="/login"
      linkTitle="Neturite paskyros? Registruokitės"
      loading={loading}
      onSubmit={handleLogin}
    >
      <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </Alert>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="El. paštas"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              readOnly: loading,
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            label="Slaptažodis"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              readOnly: loading,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;
