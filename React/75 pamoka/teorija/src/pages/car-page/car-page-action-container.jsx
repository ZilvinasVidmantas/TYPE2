import { Box } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';
import React, { useRef } from 'react';
import { calcDelay } from '../../helpers/anim-helpers';

const CarPageActionContainer = ({ children }) => {
	const delayRef = useRef(calcDelay());
	const delay = delayRef.current;

	return delay !== 0 ? (
		<SlideOnMount direction="up" delay={delay}>
			<Box sx={{ my: 4 }}>{children}</Box>
		</SlideOnMount>
	) : null;
};

export default CarPageActionContainer;
