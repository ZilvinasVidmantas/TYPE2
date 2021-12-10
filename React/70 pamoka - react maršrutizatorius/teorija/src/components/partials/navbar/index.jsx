import * as React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import Logo from './logo';
import Mobile from './mobile';
import Desktop from './desktop';
import UserMenu from './user-menu';

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
					<Logo sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
					<Mobile
						handleOpenNavMenu={handleOpenNavMenu}
						handleCloseNavMenu={handleCloseNavMenu}
						anchorElNav={anchorElNav}
					/>
					<Desktop handleCloseNavMenu={handleCloseNavMenu} />
					<UserMenu handleCloseNavMenu={handleCloseNavMenu} />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
