import React from 'react';
import { Box, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Logo from './logo';

const mobileStyles = { flexGrow: 1, display: { xs: 'flex', md: 'none' } };

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
					<MenuItem onClick={handleCloseNavMenu}>
						<Typography textAlign="center">
							<Link to="/">Home</Link>
						</Typography>
					</MenuItem>
					<MenuItem onClick={handleCloseNavMenu}>
						<Typography textAlign="center">
							<Link to="/search">Search Cars</Link>
						</Typography>
					</MenuItem>
				</Menu>
			</Box>
			<Logo sx={mobileStyles} />
		</>
	);
};

export default Mobile;
