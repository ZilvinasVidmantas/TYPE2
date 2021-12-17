import React, { useRef } from 'react';
import { Grid, Box } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';

const CarPageAnimatedCarPropsContainer = ({ children, delayProgress }) => {
	const containerRef = useRef(null);

	return (
		<Box ref={containerRef} sx={{ overflow: 'hidden' }}>
			<SlideOnMount
				direction="up"
				ref={containerRef}
				progressive={delayProgress}
			>
				<Grid container rowSpacing={1}>
					{children}
				</Grid>
			</SlideOnMount>
		</Box>
	);
};

export default CarPageAnimatedCarPropsContainer;
