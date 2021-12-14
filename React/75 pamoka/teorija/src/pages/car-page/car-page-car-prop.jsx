import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';
import { calcDelay } from '../../helpers/anim-helpers';

const CarPageCarProp = ({ name, value }) => {
	const delayRef = useRef(calcDelay());
	const delay = delayRef.current;

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
