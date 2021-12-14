import { Box } from '@mui/material';
import SlideOnMount from '../../components/animations/slide-on-mount';


const CarPageActionContainer = ({ children, delay }) => {

	return delay !== 0 ? (
		<SlideOnMount direction="up" delay={delay}>
			<Box sx={{ my: 4 }}>{children}</Box>
		</SlideOnMount>
	) : null;
};

export default CarPageActionContainer;
