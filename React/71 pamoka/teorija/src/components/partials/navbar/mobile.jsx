import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './logo';
import StyledNavLink from './styled-nav-link';

const mobileStyles = { flexGrow: 1, display: { xs: 'flex', md: 'none' } };
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({

}));


const Mobile = ({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav }) => {
	return (
		<>
			<Box sx={mobileStyles}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					<StyledMenuItem>
						<StyledNavLink to="/" onClick={handleCloseNavMenu}>
							Home
						</StyledNavLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<StyledNavLink to="/search" onClick={handleCloseNavMenu}>
							Search Cars
						</StyledNavLink>
					</StyledMenuItem>
				</Menu>
			</Box>
			<Logo sx={mobileStyles} />
		</>
	);
};

export default Mobile;
