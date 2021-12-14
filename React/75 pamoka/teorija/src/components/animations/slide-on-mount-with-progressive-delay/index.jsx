import React from 'react';
import Slide from '@mui/material/Slide';
import useAnimProgressiveDelay from './use-anim-progressive-delay';

const SlideOnMountWithProgressiveDelay = React.forwardRef(
	({ direction, children }, ref) => {
		const visible = useAnimProgressiveDelay();
		console.log(ref);

		return (
			<Slide
				direction={direction}
				in={visible}
				timeout={2000}
				container={ref.current}
			>
				{children}
			</Slide>
		);
	},
);

export default SlideOnMountWithProgressiveDelay;
