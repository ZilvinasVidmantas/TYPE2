import React, { useState, createContext } from 'react';

const initCars = [
  { id: 1, brand: 'Opel', model: 'Astra', price: 1500, year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', price: 2000, year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', price: 3000, year: 2000 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', price: 4000, year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', price: 5000, year: 2008 },
  { id: 6, brand: 'Opel', model: 'UdyrAstra', price: 6000, year: 2016 },
];

const buildCheckboxGroupFilter = (collection, property, filterTitle) => {
  const entities = collection.map(entity => entity[property]);
  const uniqEntities = [...new Set(entities)];
  const options = uniqEntities.map(name => ({ name, selected: true }));

  return {
    name: property,
    type: 'checkboxGroup',
    title: filterTitle,
    options
  }
};

const buildRangeFilter = (collection, property, filterTitle) => {
  const values = collection.map(entity => entity[property]);
  const uniqValues = values.sort((a, b) => a - b);
  const min = uniqValues.shift();
  const max = uniqValues.pop();

  return {
    name: property,
    type: 'numberRange',
    title: filterTitle,
    min,
    max,
    selectedMin: min,
    selectedMax: max,
  }
}

const initFilters = [
  buildCheckboxGroupFilter(initCars, 'brand', 'Markė'),
  buildCheckboxGroupFilter(initCars, 'model', 'Modelis'),
  buildRangeFilter(initCars, 'price', 'Kaina'),
  buildRangeFilter(initCars, 'year', 'Metai'),
];

const carState = {
  cars: [],
  filters: [],
  changeFilters: () => new Error('You must use a Provider and implement logic')
};

export const CarContext = createContext(carState);

export class CarProvider extends React.Component {
  state = { cars: initCars, filters: initFilters };

  changeFilters = ({ filterName, ...props }) => {
    const filters = this.state.filters;
    let newFilters;

    const filterType = filters.find(filter => filter.name === filterName).type;

    switch (filterType) {
      case "checkboxGroup":
        const { name, selected } = props;
        newFilters = filters.map(filter => ({
          ...filter,
          options: filter.name === filterName
            ? filter.options.map(option => ({
              ...option,
              selected: option.name === name ? selected : option.selected
            }))
            : filter.options
        }))
        break;

      case "numberRange":
        const { min, max } = props;
        newFilters = filters.map(filter => {
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
  }

  filterCars = (newFilters) => {

    const filteredCars = [];
    const testFunctions = this.createCarTestFunctions(newFilters);

    initCars.forEach(car => {
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
      filters: newFilters
    });
  }

  createCarTestFunctions = (newFilters) => newFilters
    .map(({ name, type, options, selectedMin, selectedMax }) => {
      switch (type) {
        case "checkboxGroup":
          const values = options.filter(x => x.selected).map(x => x.name);
          return (car) => values.includes(car[name]);

        case "numberRange":
          return (car) => {
            const numValue = car[name];
            return numValue <= selectedMax && numValue >= selectedMin
          }
        default:
          throw TypeError('Tokio filtro tipo nėra');
      }
    });

  render() {
    console.log('Atnaujinamas CarProvider');

    return (
      <CarContext.Provider value={{
        ...this.state,
        changeFilters: this.changeFilters
      }}>
        {this.props.children}
      </CarContext.Provider>
    )
  }
}

export default CarContext;
