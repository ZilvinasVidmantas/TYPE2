import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedCarProp = ({ name, value }) => {
	const containerRef = useRef(null);

	return (
		<Box sx={{ textAlign: 'center' }} ref={containerRef}>
			<SlideOnMountWithProgressiveDelay direction="left" ref={containerRef}>
				<Box>
					<Typography variant="h5">{name}</Typography>
					<Typography>{value}</Typography>
				</Box>
			</SlideOnMountWithProgressiveDelay>
		</Box>
	);
};

export default CarPageAnimatedCarProp;
