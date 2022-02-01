import { useState, useEffect, useRef } from 'react';
import Slide from '@mui/material/Slide';

const SlideOnMount = ({ direction, delay, children }) => {
	const [visible, setVisible] = useState(false);
	const exists = useRef(true);
	useEffect(
		() => {
			setTimeout(() => {
				if (exists.current) {
					setVisible(true);
				}
			}, delay);
			return () => {
				exists.current = false;
			};
		},
		[delay],
	);

	return (
		<Slide direction={direction} in={visible}>
			{children}
		</Slide>
	);
};

export default SlideOnMount;
