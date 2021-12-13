import { useState, useEffect } from 'react';
import { Box, Slide } from '@mui/material';

let count = 0;
const delayTime = 150;

const CarPageActionContainer = ({ children }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisible(true);
		}, 1000 + delayTime * count);
		count++;
	}, []);

	return (
		<Slide direction="up" in={visible}>
			<Box sx={{ my: 4 }}>{children}</Box>
		</Slide>
	);
};

export default CarPageActionContainer;

// Sukurti
