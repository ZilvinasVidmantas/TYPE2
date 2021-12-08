import React, { createContext } from 'react';
import FilterBuilder from '../libraries/filter-builder';

const initCars = [
	{
		id: 6,
		brand: 'Opel',
		model: 'Zefyra',
		price: 6000,
		year: 2016,
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/4/46/Opel_Zafira_Tourer_2.0_CDTI_Innovation_%28C%29_%E2%80%93_Frontansicht%2C_23._Mai_2013%2C_Heiligenhaus.jpg',
			'https://img.autogidas.lt/4_26_206009392/opel-zafira-tourer-20-cdti-at-vienaturis-2016.jpg',
			'https://www.autobild.lt/wp-content/uploads/2014/08/1407226016987.jpg',
			'https://i.ytimg.com/vi/s5V3MTeeR7s/maxresdefault.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUXy2VA3cIoITdoRSTogKg7m30rg5MZPb-rUOCQEannOiUwTJ74mPaj_eSe7uvwhqQzE&usqp=CAU',
		],
	},
	{
		id: 4,
		brand: 'Volkswagen',
		model: 'Passat',
		price: 4000,
		year: 2006,
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/a/a2/2010_Volkswagen_Passat_Highline_TDi_140_2.0_Front.jpg',
		],
	},
	{
		id: 1,
		brand: 'Opel',
		model: 'Astra',
		price: 1500,
		year: 2000,
		images: [
			'https://www.automobilis.lt/upload/skelbimai/big/2016-12/11303-opel-astra-2000-m-hecbekas-181346.jpg',
		],
	},
	{
		id: 3,
		brand: 'Subaru',
		model: 'Impreza',
		price: 3000,
		year: 2000,
		images: [
			'https://st.mascus.com/imagetilewm/product/59b5ddce/subaru-impreza-p1-1739,576c2195.jpg',
		],
	},
	{
		id: 2,
		brand: 'BMW',
		model: 'X5',
		price: 2000,
		year: 2000,
		images: ['https://img.autogidas.lt/10_1_7340563/bmw-x5-2000-2003.jpg'],
	},
	{
		id: 5,
		brand: 'Opel',
		model: 'Astra',
		price: 5000,
		year: 2008,
		images: [
			'https://upload.wikimedia.org/wikipedia/commons/1/17/Opel_Astra_front_20080306.jpg',
		],
	},
];

const initFilters = new FilterBuilder(initCars)
	.checkboxGroup({ prop: 'brand', title: 'Markė' })
	.checkboxGroup({ prop: 'model', title: 'Modelis' })
	.range({ prop: 'price', title: 'Kaina' })
	.range({ prop: 'year', title: 'Metai' }).filters;

const carState = {
	cars: [],
	filters: [],
	changeFilter: () => new Error('You must use a Provider and implement logic'),
};

export const CarContext = createContext(carState);

export class CarProvider extends React.Component {
	state = { cars: initCars, filters: initFilters };

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

		initCars.forEach((car) => {
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
