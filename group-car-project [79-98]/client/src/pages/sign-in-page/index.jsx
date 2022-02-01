import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Box,
  Alert,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormContainer from '../../components/containers/form-container';
import FormButton from '../../components/buttons/form-button';
import { createLoginSuccessAction } from '../../store/auth/action-creators';
import { login } from '../../services/api-service';

const title = ['Prisijungti'];

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(''); // sukuriamas two way binding su text field
  const [password, setPassword] = useState(''); // sukuriamas two way binding su text field
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault(); // apsaugo nuo persikrovimo
    setError(null);
    (async () => {
      try {
        const { user, token } = await login({
          email,
          password,
        });
        const loginSuccessAction = createLoginSuccessAction({ user, token });
        dispatch(loginSuccessAction);
      } catch (err) {
        setError(err.message); // jeigu yra  error
      }
    })();
  };

  return (

    <FormContainer title={title} onSubmit={handleLogin}>
      <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </Alert>
      <Box component="form">
        <Grid container spacing={2}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 5 }}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Slaptažodis"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <FormButton onClick={handleLogin}>{title}</FormButton>
        <Link to="/sign-up">
          Neturite paskyros? Registruokitės
        </Link>
      </Box>
    </FormContainer>
  );
};
export default SignIn;
