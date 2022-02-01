import React from 'react';
import Slide from '@mui/material/Slide';
import useAnimProgressiveDelay from './use-anim-progressive-delay';

const SlideOnMountWithProgressiveDelay = React.forwardRef(
	({ direction, children }, ref) => {
		const show = useAnimProgressiveDelay();

		return (
			<Slide direction={direction} in={show} container={ref.current}>
				{children}
			</Slide>
		);
	},
);

export default SlideOnMountWithProgressiveDelay;
