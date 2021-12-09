import React, { createContext } from 'react';
import FilterBuilder from '../libraries/filter-builder';
import API from '../services/api-service';

const carState = {
	cars: [],
	filters: [],
	changeFilter: () => new Error('You must use a Provider and implement logic'),
};

export const CarContext = createContext(carState);

export class CarProvider extends React.Component {
	state = { cars: [], filters: [], allCars: [] };

	changeFilter = ({ filterName, ...props }) => {
		const filters = this.state.filters;
		let newFilters;

		const filterType = filters.find((filter) => filter.name === filterName)
			.type;

		switch (filterType) {
			case 'checkboxGroup':
				const { name, selected } = props;
				newFilters = filters.map((filter) => ({
					...filter,
					options:
						filter.name === filterName
							? filter.options.map((option) => ({
									...option,
									selected: option.name === name ? selected : option.selected,
								}))
							: filter.options,
				}));
				break;

			case 'numberRange':
				const { min, max } = props;
				newFilters = filters.map((filter) => {
					const updatedFilter = { ...filter };

					if (filter.name === filterName) {
						updatedFilter.selectedMin = min;
						updatedFilter.selectedMax = max;
					}
					return updatedFilter;
				});
				break;

			default:
				console.error('Tokio filtro tipo nėra');
		}

		this.filterCars(newFilters);
	};

	filterCars = (newFilters) => {
		const filteredCars = [];
		const testFunctions = this.createCarTestFunctions(newFilters);

		this.state.allCars.forEach((car) => {
			let carAcceptable = true;

			for (let i = 0; i < testFunctions.length; i++) {
				const testCar = testFunctions[i];
				if (!testCar(car)) {
					carAcceptable = false;
					break;
				}
			}

			if (carAcceptable) filteredCars.push(car);
		});

		this.setState({
			cars: filteredCars,
			filters: newFilters,
		});
	};

	createCarTestFunctions = (newFilters) =>
		newFilters.map(({ name, type, options, selectedMin, selectedMax }) => {
			switch (type) {
				case 'checkboxGroup':
					const values = options.filter((x) => x.selected).map((x) => x.name);
					return (car) => values.includes(car[name]);

				case 'numberRange':
					return (car) => {
						const numValue = car[name];
						return numValue <= selectedMax && numValue >= selectedMin;
					};
				default:
					throw TypeError('Tokio filtro tipo nėra');
			}
		});

	componentDidMount() {
		const fecthInitialData = async () => {
			const initCars = await API.fetchCars();
			const initFilters = new FilterBuilder(initCars)
				.checkboxGroup({ prop: 'brand', title: 'Markė' })
				.checkboxGroup({ prop: 'model', title: 'Modelis' })
				.range({ prop: 'price', title: 'Kaina' })
				.range({ prop: 'year', title: 'Metai' }).filters;
			this.setState({
				cars: initCars,
				filters: initFilters,
				allCars: initCars,
			});
		};

		fecthInitialData();
	}

	render() {
		return (
			<CarContext.Provider
				value={{
					...this.state,
					changeFilter: this.changeFilter,
				}}
			>
				{this.props.children}
			</CarContext.Provider>
		);
	}
}

export default CarContext;
