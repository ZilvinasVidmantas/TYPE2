import React, { createContext, useEffect } from 'react';
import API from '../services/api-service';
import useFilters from '../hooks/useFilters';

const carState = {
	cars: [],
	filters: [],
	changeFilter: () => new Error('You must use a Provider and implement logic'),
};

export const CarContext = createContext(carState);

export const CarProvider = ({ children }) => {
	const [cars, filters, setCars, changeFilter] = useFilters([
		{ type: 'checkboxGroup', prop: 'brand', title: 'Markė' },
		{ type: 'checkboxGroup', prop: 'model', title: 'Modelis' },
		{ type: 'range', prop: 'price', title: 'Kaina' },
		{ type: 'range', prop: 'year', title: 'Metai' },
	]);

	console.log({
		cars,
		filters,
		setCars,
		changeFilter,
	});

	useEffect(() => {
		const fecthInitialData = async () => {
			const initCars = await API.fetchCars();
			setCars(initCars);
		};

		fecthInitialData();
	}, []);

	return (
		<CarContext.Provider
			value={{
				cars,
				filters,
				changeFilter,
			}}
		>
			{children}
		</CarContext.Provider>
	);
};

export default CarContext;
