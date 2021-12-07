import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Desktop = ({ handleCloseNavMenu }) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			<Button
				onClick={handleCloseNavMenu}
				sx={{ my: 2, color: 'white', display: 'block' }}
			>
				<Link to="/">Home</Link>
			</Button>
			<Button
				onClick={handleCloseNavMenu}
				sx={{ my: 2, color: 'white', display: 'block' }}
			>
				<Link to="/search">Search Cars</Link>
			</Button>
		</Box>
	);
};

export default Desktop;
