import React, { useState, createContext } from 'react';

const initCars = [
  { id: 1, brand: 'Opel', model: 'Astra', price: 1500, year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', price: 2000, year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', price: 3000, year: 2000 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', price: 4000, year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', price: 5000, year: 2008 },
  { id: 6, brand: 'Opel', model: 'UdyrAstra', price: 6000, year: 2016 },
];

const brands = initCars.map(car => car.brand);
const uniqBrands = [...new Set(brands)];
const brandOptions = uniqBrands.map(brand => ({
  name: brand,
  selected: true
}));

const models = initCars.map(car => car.model);
const uniqModels = [...new Set(models)];
const modelOptions = uniqModels.map(model => ({
  name: model,
  selected: true
}));

const years = initCars.map(car => car.year);
const yearsSorted = years.sort((a, b) => a - b);
const minYear = yearsSorted.shift();
const maxYear = yearsSorted.pop();

const prices = initCars.map(car => car.price);
const pricesSorted = prices.sort((a, b) => a - b);
const minPrice = pricesSorted.shift();
const maxPrice = pricesSorted.pop();

const initFilters = [{
  name: 'brand',
  type: 'checkboxGroup',
  title: 'Markė',
  options: brandOptions
}, {
  name: 'model',
  type: 'checkboxGroup',
  title: 'Modelis',
  options: modelOptions
}, {
  name: 'year',
  type: 'numberRange',
  title: 'Metai',
  min: minYear,
  max: maxYear,
  selectedMin: minYear,
  selectedMax: maxYear,
}, {
  name: 'price',
  type: 'numberRange',
  title: 'Kaina',
  min: minPrice,
  max: maxPrice,
  selectedMin: minPrice,
  selectedMax: maxPrice,
}];

const carState = {
  cars: [],
  filters: [],
  changeFilters: () => new Error('You must use a Provider and implement logic')
};

export const CarContext = createContext(carState);

export const CarProvider = ({ children }) => {
  const [state, setState] = useState({ cars: initCars, filters: initFilters });

  const changeFilters = ({ filterName, ...props }) => {
    const filters = state.filters;
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

    filterCars(newFilters);
  }

  const filterCars = (newFilters) => {

    const filteredCars = [];
    const testFunctions = createCarTestFunctions(newFilters);

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

    setState({
      cars: filteredCars,
      filters: newFilters
    });
  }

  const createCarTestFunctions = (newFilters) => newFilters
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

  console.log('Atnaujinamas CarProvider')

  return (
    <CarContext.Provider value={{
      ...state,
      changeFilters
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContext;


/*
  Sukurkite kiekvienai mašinai kainą,
  ir kainai nustatykite kainos filtrą


*/
