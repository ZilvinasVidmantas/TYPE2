import { styled } from '@mui/material';
import Navbar, { NavbarProps } from '../../partials/navbar';

export type DashboardLayoutAppBarProps = NavbarProps & {
  open: boolean,
};

const DashboardLayoutAppBar = styled(Navbar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DashboardLayoutAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - ${theme.mixins.drawer.width}px)`,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    ...(open && {
      width: `calc(100% - ${theme.mixins.drawer.width}px)`,
      marginLeft: `${theme.mixins.drawer.width}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
}));

export default DashboardLayoutAppBar;
