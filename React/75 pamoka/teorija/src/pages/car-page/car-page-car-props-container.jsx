import React from 'react';
import Box from '@mui/material/Box';

const CarPageCarPropsContainer = React.forwardRef(({ children }, ref) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				my: 3,
				overflow: 'hidden',
			}}
			ref={ref}
		>
			{children}
		</Box>
	);
});

export default CarPageCarPropsContainer;
