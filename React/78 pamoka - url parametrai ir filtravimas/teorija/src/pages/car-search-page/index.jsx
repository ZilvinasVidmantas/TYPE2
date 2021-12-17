import React, { useContext } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import CarTable from './car-table';
import CarFilters from './car-filters';
import { CarContext } from '../../contexts/car-context';

const CarSearch = () => {
	const { cars } = useContext(CarContext);
	return (
		<Container maxWidth="xl" sx={{ mt: 3 }}>
			{cars.length > 0 ? (
				<>
					<Typography component="h1" variant="h3" gutterBottom align="center">
						Mašinos
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={2}>
							<CarFilters />
						</Grid>
						<Grid item xs={10}>
							<CarTable />
						</Grid>
					</Grid>
				</>
			) : (
				<Typography
					component="h1"
					variant="h3"
					color="error"
					gutterBottom
					align="center"
				>
					Nėra mašinų
				</Typography>
			)}
		</Container>
	);
};

export default CarSearch;
