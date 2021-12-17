import React, { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import { CarContext } from '../../contexts/car-context';
import CheckboxGroupFilter from '../../components/controls/checkbox-group-filter';
import RangeFilter from '../../components/controls/range-filter';
import { useSearchParams } from 'react-router-dom';

const createUrlParamObj = (searchParams, additionParam) => {
	const paramObj = {};
	const addParam = (value, key) => {
		if (!paramObj.hasOwnProperty(key)) {
			paramObj[key] = [value];
		} else if (!paramObj[key].includes(value)) {
			paramObj[key].push(value);
		}
	};
	searchParams.forEach(addParam);
	if (additionParam) {
		const { value, key } = additionParam;
		addParam(value, key);
	}

	return paramObj;
};

const CarFilters = () => {
	const { filters } = useContext(CarContext);
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(createUrlParamObj(searchParams));

	const changeFilter = (props) => {
		const key = props.filterName;
		const value = props.name;
		const newParams = createUrlParamObj(searchParams, { key, value });

		setSearchParams(newParams);
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
