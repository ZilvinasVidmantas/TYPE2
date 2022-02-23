import React from 'react';
import {
  Button, ButtonProps,
} from '@mui/material';

type FormButtonProps = Omit<ButtonProps, 'type' | 'fullWidth' | 'variant' | 'color'>;

const FormButton: React.FC<FormButtonProps> = ({ children, sx, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    sx={{ height: 56, mb: 1, ...sx }}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;
