import React from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';

const CarPageCarProp = ({ name, value, delay}) => {

	return delay !== 0 ? (
		<SlideOnMount direction="left" delay={delay}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h5">{name}</Typography>
				<Typography>{value}</Typography>
			</Box>
		</SlideOnMount>
	) : null;
};

export default CarPageCarProp;
