import React, { useRef } from 'react';
import { Grid, Box } from '@mui/material';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedCarPropsContainer = ({ children }) => {
	const containerRef = useRef(null);

	return (
		<Box ref={containerRef} sx={{ overflow: 'hidden' }}>
			<SlideOnMountWithProgressiveDelay direction="up" ref={containerRef}>
				<Grid container rowSpacing={1}>
					{children}
				</Grid>
			</SlideOnMountWithProgressiveDelay>
		</Box>
	);
};

export default CarPageAnimatedCarPropsContainer;
