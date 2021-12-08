import React from 'react';
import { Box } from '@mui/material';
import StyledNavLink from './styled-nav-link';

const Desktop = ({ handleCloseNavMenu }) => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: 'none', md: 'flex' },
				height: '100%',
				alignItems: 'stretch',
			}}
		>
			<StyledNavLink to="/" onClick={handleCloseNavMenu}>
				Home
			</StyledNavLink>
			<StyledNavLink to="/search" onClick={handleCloseNavMenu}>
				Search Cars
			</StyledNavLink>
		</Box>
	);
};

export default Desktop;
