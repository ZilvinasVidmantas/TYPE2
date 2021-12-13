import { useState, useEffect } from 'react';
import { Box, Typography, Slide } from '@mui/material';

let count = 0;
const delayTime = 150;

const CarPageCarProp = ({ name, value }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisible(true);
		}, 1000 + delayTime * count);
		count++;
	}, []);

	return (
		<Slide direction="left" in={visible}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h5">{name}</Typography>
				<Typography>{value}</Typography>
			</Box>
		</Slide>
	);
};

export default CarPageCarProp;
