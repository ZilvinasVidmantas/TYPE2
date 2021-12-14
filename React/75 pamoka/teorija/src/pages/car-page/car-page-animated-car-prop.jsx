import React from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedCarProp = React.forwardRef(({ name, value }, ref) => {
	return (
		<SlideOnMountWithProgressiveDelay direction="up" ref={ref}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h5">{name}</Typography>
				<Typography>{value}</Typography>
			</Box>
		</SlideOnMountWithProgressiveDelay>
	);
});

export default CarPageAnimatedCarProp;
