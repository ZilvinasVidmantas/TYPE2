import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const BaseLayoutNavbarLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.grey[300],
  textDecoration: 'none',
  padding: theme.spacing(1),
  ':hover': {
    textDecoration: 'underline',
  },
  '&.active': {
    color: theme.palette.common.white,
  }
}));

export default BaseLayoutNavbarLink;
