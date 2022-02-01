import Box from '@mui/material/Box';

const CarPageCarPropsContainer = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				my: 3,
				overflow: 'hidden',
			}}
		>
			{children}
		</Box>
	);
};

export default CarPageCarPropsContainer;
