import React from 'react';
import { Box } from '@mui/material';

const CarPageActionsContainer = ({ children }) => {
	return (
		<Box
			sx={{
				justifyContent: 'center',
				gap: 1,
				textAlign: 'center',
				overflow: 'hidden',
			}}
		>
			{children}
		</Box>
	);
};

export default CarPageActionsContainer;
