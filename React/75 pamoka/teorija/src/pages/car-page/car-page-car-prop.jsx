import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';
import AnimProgressiveContext from '../../contexts/anim-progressive-context';

const CarPageCarProp = ({ name, value }) => {
	const nextDelay = useContext(AnimProgressiveContext);
	const delay = nextDelay();

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
