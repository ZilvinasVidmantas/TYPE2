import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (propName) => propName !== 'breakPoint',
})(({ theme, breakPoint }) => ({
  display: 'flex',
  textDecoration: 'none',
  width: '100%',
  color: theme.palette.common.black,
  '&.active': {
    paddingLeft: 4,
    boxShadow: `-2px 0 0 0 ${theme.palette.primary.main}`,
  },

  [theme.breakpoints.up(breakPoint)]: {
    alignItems: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    width: 'auto',
    ':hover': {
      background: theme.palette.action.hover,
    },
    '&.active': {
      padding: theme.spacing(2),
      boxShadow: `inset 0 -2px 0 ${theme.palette.common.white}`,
    },
  },
}));

export default StyledNavLink;
