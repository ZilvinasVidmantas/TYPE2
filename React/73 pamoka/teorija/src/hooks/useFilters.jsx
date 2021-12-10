import { useState } from 'react';
import FilterBuilder from '../libraries/filter-builder/filter-builder';

const useFilters = (filterSettings) => {
	const [filterBuilder] = useState(new FilterBuilder());
	const [fullCollection, setFullCollection] = useState();
	const [collection, setCollection] = useState(filterBuilder.collection);

	const setInitialCollection = (newCollection) => {
		filterBuilder.setCollection(newCollection);
		filterSettings.forEach(({ type, prop, title }) => {
			filterBuilder[type]({ prop, title });
		});
		setFullCollection(filterBuilder.collection);
		setCollection(filterBuilder.collection);
	};

	const changeFilter = ({ filterName, ...props }) => {
		filterBuilder.updateFilter({ filterName, ...props });
		filterCars();
	};

	const filterCars = () => {
		const filteredEntities = [];
		const testFunctions = filterBuilder.createCarTestFunctions();
		fullCollection.forEach((entity) => {
			let entityAcceptable = true;
			for (let i = 0; i < testFunctions.length; i++) {
				const testEntity = testFunctions[i];
				if (!testEntity(entity)) {
					entityAcceptable = false;
					break;
				}
			}
			if (entityAcceptable) filteredEntities.push(entity);
		});
		setCollection(filteredEntities);
	};

	return [
		collection,
		filterBuilder.filters,
		setInitialCollection,
		changeFilter,
	];
};

export default useFilters;

// 15
// tęsim
