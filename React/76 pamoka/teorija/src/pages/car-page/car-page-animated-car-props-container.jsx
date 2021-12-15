import React from 'react';
import { Grid } from '@mui/material';

const CarPageAnimatedCarPropsContainer = ({ children }) => {
	return (
		<Grid container rowSpacing={1}>
			{children}
		</Grid>
	);
};

export default CarPageAnimatedCarPropsContainer;
