import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageActionContainer = ({ children }) => {
	const [_, setState] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		setState((state) => state + 1);
	}, []);

	return (
		<Box sx={{ my: 4 }} ref={ref}>
			{ref.current !== null ? (
				<SlideOnMountWithProgressiveDelay direction="up" ref={ref}>
					{children}
				</SlideOnMountWithProgressiveDelay>
			) : null}
		</Box>
	);
};

export default CarPageActionContainer;
