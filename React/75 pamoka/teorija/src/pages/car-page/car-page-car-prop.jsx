import { Box, Typography } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';
import useAnimProgressiveDelay from '../../hooks/use-anim-progressive-delay';

const CarPageCarProp = ({ name, value }) => {
	const delay = useAnimProgressiveDelay();

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
