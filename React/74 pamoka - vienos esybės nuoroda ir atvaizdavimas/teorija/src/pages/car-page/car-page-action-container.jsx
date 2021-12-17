import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';

let componentCount = 0;
const baseDellay = 1200;
const additionalDellaySize = 150;

const CarPageActionContainer = ({ children }) => {
	const [delay, setDellay] = useState(0);

	useEffect(() => {
		componentCount++;
		setDellay(baseDellay + componentCount * additionalDellaySize);
		return () => {
			componentCount--;
		};
	}, []);

	return delay !== 0 ? (
		<SlideOnMount direction="up" delay={delay}>
			<Box sx={{ my: 4 }}>{children}</Box>
		</SlideOnMount>
	) : null;
};

export default CarPageActionContainer;

// Sukurti
