import React from 'react';
import { styled, Box, BoxProps } from '@mui/material';

export type DashboardLayoutMainProps = BoxProps & {
  open: boolean,
};

const StyledDashboardLayoutMain =
  styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<DashboardLayoutMainProps>(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.down('md')]: {
        marginLeft: `-${theme.mixins.drawer.width}px`,
        ...(open && {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }),
      }
    }),
  );

const DashboardLayoutMain: React.FC<DashboardLayoutMainProps> = ({ children, ...props }) => (
  <StyledDashboardLayoutMain {...props} component="main">{children}</StyledDashboardLayoutMain>
);

export default DashboardLayoutMain;
