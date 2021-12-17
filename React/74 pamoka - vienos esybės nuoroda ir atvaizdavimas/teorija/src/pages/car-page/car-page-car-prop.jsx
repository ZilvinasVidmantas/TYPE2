import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';

let componentCount = 0;
const baseDellay = 750;
const additionalDellaySize = 150;

const CarPageCarProp = ({ name, value }) => {
	const [delay, setDellay] = useState(0);

	useEffect(() => {
		componentCount++;
		setDellay(baseDellay + componentCount * additionalDellaySize);
		return () => {
			componentCount--;
		};
	}, []);

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
