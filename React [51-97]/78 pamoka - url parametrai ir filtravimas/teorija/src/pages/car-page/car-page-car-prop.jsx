import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const CarPageCarProp = ({ name, value }) => {
	return (
		<Grid item xs={6} sx={{ textAlign: 'center' }}>
			<Box>
				<Typography variant="h6">{name}</Typography>
				<Typography>{value}</Typography>
			</Box>
		</Grid>
	);
};

export default CarPageCarProp;
