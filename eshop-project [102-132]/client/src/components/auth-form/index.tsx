import React, { FormEventHandler } from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import Button from './auth-form-button';

export type AuthFormProps = {
  title: string,
  linkTo: string,
  linkTitle: string,
  loading: boolean,
  isValid: boolean,
  onSubmit: FormEventHandler<HTMLFormElement>,
};

const AuthForm: React.FC<AuthFormProps> = ({
  children,
  title,
  linkTo,
  linkTitle,
  loading,
  isValid,
  onSubmit,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={(theme) => ({ pt: `calc( 2 * ${theme.mixins.navbar.height}px)` })}
  >
    <Box component="form" onSubmit={onSubmit}>
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
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {children}
      <Button disabled={!isValid}>
        {
          loading
            ? <CircularProgress color="inherit" />
            : title
        }
      </Button>
      <Link to={linkTo}>
        {linkTitle}
      </Link>
    </Box>
  </Container>
);

export default AuthForm;
