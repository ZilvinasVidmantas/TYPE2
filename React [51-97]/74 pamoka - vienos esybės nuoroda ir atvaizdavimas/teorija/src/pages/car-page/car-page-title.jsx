import React from 'react';
import { Box, Typography } from '@mui/material';
const CarPageTitle = ({ brand, model, year }) => {
	return (
		<Box>
			<Typography component="h1" variant="h4" align="center">
				{brand} {model}
			</Typography>
			<Typography
				component="h2"
				variant="h6"
				align="center"
				color="text.secondary"
			>
				{year}
			</Typography>
		</Box>
	);
};

export default CarPageTitle;
