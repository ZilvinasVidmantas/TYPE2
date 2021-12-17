import React from 'react';
import { Box } from '@mui/material';
import StyledNavLink from './styled-nav-link';
import Logo from './logo';

const Desktop = ({ handleCloseNavMenu, breakPoint }) => {
	const desktopStyles = {
		display: { xs: 'none', [breakPoint]: 'flex' },
	};

	return (
		<>
			<Logo sx={{ mr: 2, ...desktopStyles }} />
			<Box
				sx={{
					flexGrow: 1,
					height: '100%',
					alignItems: 'stretch',
					...desktopStyles,
				}}
			>
				<StyledNavLink
					to="/"
					onClick={handleCloseNavMenu}
					breakPoint={breakPoint}
				>
					Home
				</StyledNavLink>
				<StyledNavLink
					to="/search"
					onClick={handleCloseNavMenu}
					breakPoint={breakPoint}
				>
					Search Cars
				</StyledNavLink>
			</Box>
		</>
	);
};

export default Desktop;
