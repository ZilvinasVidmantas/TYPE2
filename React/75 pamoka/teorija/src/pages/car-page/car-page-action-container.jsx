import { Box } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';
import useAnimProgressiveDelay from '../../hooks/use-anim-progressive-delay';

const CarPageActionContainer = ({ children }) => {
	const delay = useAnimProgressiveDelay(0);

	return delay !== 0 ? (
		<SlideOnMount direction="up" delay={delay}>
			<Box sx={{ my: 4 }}>{children}</Box>
		</SlideOnMount>
	) : null;
};

export default CarPageActionContainer;
