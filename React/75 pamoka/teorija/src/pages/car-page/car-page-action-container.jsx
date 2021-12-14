import { useContext } from 'react';
import { Box } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';
import AnimProgressiveContext from '../../contexts/anim-progressive-context';

const CarPageActionContainer = ({ children }) => {
	const { delay } = useContext(AnimProgressiveContext);

	return delay !== 0 ? (
		<SlideOnMount direction="up" delay={delay}>
			<Box sx={{ my: 4 }}>{children}</Box>
		</SlideOnMount>
	) : null;
};

export default CarPageActionContainer;
