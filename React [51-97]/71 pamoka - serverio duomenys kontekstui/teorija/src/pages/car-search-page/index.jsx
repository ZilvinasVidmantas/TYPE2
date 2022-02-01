import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import CarTable from './car-table';
import CarFilters from './car-filters';

const CarSearch = () => {
	return (
		<Container maxWidth="xl">
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
		</Container>
	);
};

export default CarSearch;
