import * as React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import Mobile from './mobile';
import Desktop from './desktop';
import UserMenu from './user-menu';

const breakPoint = 'sm';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Mobile
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
            breakPoint={breakPoint}
          />
          <Desktop
            handleCloseNavMenu={handleCloseNavMenu}
            breakPoint={breakPoint}
          />
          <UserMenu handleCloseNavMenu={handleCloseNavMenu} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
