import React from 'react';
import Slide from '@mui/material/Slide';
import useAnimProgressiveDelay from './use-anim-progressive-delay';

const SlideOnMountWithProgressiveDelay = ({ direction, children }) => {
	const visible = useAnimProgressiveDelay();

	return (
		<Slide direction={direction} in={visible} timeout={500}>
			{children}
		</Slide>
	);
};

export default SlideOnMountWithProgressiveDelay;
