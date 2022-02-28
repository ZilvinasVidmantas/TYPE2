import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  Divider,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import routes from 'routing/routes';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { authSelector } from 'store/auth';
import { useSelector } from 'store/hooks';

import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';
import DashboardLayoutDrawerLink from './dashboard-layout-drawer-link';

const navigationItems = {
  common: [
    { title: 'Profilis', path: routes.ProfilePage, Icon: PersonIcon },
  ],
  user: [
    { title: 'Užsakymai', path: routes.OrdersPage, Icon: HistoryIcon },
  ],
  admin: [
    { title: 'Paslaugų panelė', path: routes.ServicePanelPage, Icon: ConstructionIcon },
    { title: 'Vartotojų panelė', path: routes.UserPanelPage, Icon: GroupIcon },
    { title: 'Kategorijų panelė', path: routes.CategoryPanelPage, Icon: CategoryIcon },
    { title: 'Miestų panelė', path: routes.CityPanelPage, Icon: LocationCityIcon },
  ],
};

export type DashboardLayoutDrawerProps = {
  open: boolean,
  handleDrawerClose: () => void,
  isSmallScreen: boolean,
};

const DashboardLayoutDrawer: React.FC<DashboardLayoutDrawerProps> = ({
  open,
  handleDrawerClose,
  isSmallScreen,
}) => {
  const theme = useTheme();
  const { user } = useSelector(authSelector);

  return (
    <Drawer
      sx={{
        width: theme.mixins.drawer.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: theme.mixins.drawer.width,
          boxSizing: 'border-box',
        },
      }}
      variant={isSmallScreen ? 'persistent' : 'permanent'}
      anchor="left"
      open={open}
    >
      <DashboardLayoutDrawerHeader>
        {isSmallScreen && (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        )}
      </DashboardLayoutDrawerHeader>
      <List>
        {navigationItems.common.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}
        <Divider />
        {user?.role === 'ADMIN' && navigationItems.admin.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

        {user?.role === 'USER' && navigationItems.user.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

      </List>

    </Drawer>
  );
};

export default DashboardLayoutDrawer;
