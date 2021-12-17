import React from 'react';
import { Box } from '@mui/material';

const CarPageAnimatedActionsContainer = ({ children }) => {
	return (
		<Box
			sx={{
				justifyContent: 'center',
				gap: 2,
				textAlign: 'center',
				overflow: 'hidden',
			}}
		>
			{children}
		</Box>
	);
};

export default CarPageAnimatedActionsContainer;
