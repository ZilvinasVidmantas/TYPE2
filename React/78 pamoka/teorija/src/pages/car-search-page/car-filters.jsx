import React, { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import { CarContext } from '../../contexts/car-context';
import CheckboxGroupFilter from '../../components/controls/checkbox-group-filter';
import RangeFilter from '../../components/controls/range-filter';
import { useSearchParams } from 'react-router-dom';

const getUrlParams = (searchParams) => {
	const paramObj = {};
	searchParams.forEach((value, key) => {
		if (paramObj.hasOwnProperty(key)) {
			const existingValue = paramObj[key];
			if (existingValue instanceof Array) {
				paramObj[key].push(value);
			} else {
				paramObj[key] = [existingValue, value];
			}
		} else {
			paramObj[key] = value;
		}
	});
	return paramObj;
};

const CarFilters = () => {
	const { filters } = useContext(CarContext);
	const [searchParams, setSearchParams] = useSearchParams({});

	const changeFilter = (props) => {
		const key = props.filterName;
		const value = props.name;
		const prevParamsObj = getUrlParams(searchParams);

		setSearchParams({
			...prevParamsObj,
			[key]: value,
		});
	};

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
