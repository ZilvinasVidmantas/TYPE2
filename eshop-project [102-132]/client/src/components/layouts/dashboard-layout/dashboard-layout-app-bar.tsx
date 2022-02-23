import { styled } from '@mui/material';
import Navbar, { NavbarProps } from '../../partials/navbar';

export type DashboardLayoutAppBarProps = NavbarProps & {
  open: boolean,
  drawerWidth: number
};

const DashboardLayoutAppBar = styled(Navbar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DashboardLayoutAppBarProps>(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default DashboardLayoutAppBar;
