import React, { useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedCarProp = ({ name, value }) => {
	const containerRef = useRef(null);

	return (
		<Grid item xs={6} sx={{ textAlign: 'center' }} ref={containerRef}>
			<SlideOnMountWithProgressiveDelay direction="left" ref={containerRef}>
				<Box>
					<Typography variant="h6">{name}</Typography>
					<Typography>{value}</Typography>
				</Box>
			</SlideOnMountWithProgressiveDelay>
		</Grid>
	);
};

export default CarPageAnimatedCarProp;
