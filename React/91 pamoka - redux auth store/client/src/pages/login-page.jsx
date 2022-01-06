import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Alert,
} from '@mui/material';
import AuthForm from '../components/auth-form';
import { login } from '../services/api-service';

const title = ['Prisijungti'];

const LoginPage = () => {
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
        const userData = await login({
          email,
          password,
        });
        console.log(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
    console.log('prisijungiama...');
  };

  return (
    <AuthForm
      title={title}
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
            required
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
            required
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
