import React from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedCarProp = ({ name, value }) => {
	return (
		<SlideOnMountWithProgressiveDelay direction="up">
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h5">{name}</Typography>
				<Typography>{value}</Typography>
			</Box>
		</SlideOnMountWithProgressiveDelay>
	);
};

export default CarPageAnimatedCarProp;
