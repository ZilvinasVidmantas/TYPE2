import React, { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import { CarContext } from '../../contexts/car-context';
import CheckboxGroupFilter from '../../components/checkbox-group-filter';
import RangeFilter from '../../components/range-filter';

const CarFilters = () => {
	const { filters, changeFilter } = useContext(CarContext);

	const filterGroups = filters.map(({ name, type, ...filterProps }) => {
		switch (type) {
			case 'checkboxGroup':
				return (
					<CheckboxGroupFilter
						key={name}
						filterName={name}
						onChange={changeFilter}
						{...filterProps}
					/>
				);

			case 'numberRange':
				return (
					<RangeFilter
						key={name}
						filterName={name}
						onChange={changeFilter}
						{...filterProps}
					/>
				);
			default:
				throw new Error(
					'DataFilter Komponente, naudojamas nežinomas filtro tipas',
				);
		}
	});

	return (
		<Paper elevation={4} sx={{ p: 2 }}>
			<Typography component="h2" variant="h4">
				Filtrai
			</Typography>
			{filterGroups}
		</Paper>
	);
};

export default CarFilters;
