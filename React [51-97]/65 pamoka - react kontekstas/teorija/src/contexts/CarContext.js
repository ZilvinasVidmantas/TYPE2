import React, { createContext } from 'react';

const cars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2000 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 },
  { id: 6, brand: 'Opel', model: 'UdyrAstra', year: 2016 },
];

const brands = cars.map(car => car.brand);
const uniqBrands = [...new Set(brands)];
const brandOptions = uniqBrands.map(brand => ({
  name: brand,
  selected: true
}))

const models = cars.map(car => car.model);
const uniqModels = [...new Set(models)];
const modelOptions = uniqModels.map(model => ({
  name: model,
  selected: true
}))

const years = cars.map(car => car.year);
const yearsSorted = years.sort((a, b) => a - b);
const minYear = yearsSorted.shift();
const maxYear = yearsSorted.pop();

const carState = {
  getCars: () => {
    const carsResult = [];
    const testFunctions = createCarTestFunctions();

    cars.forEach(car => {
      let carAcceptable = true;

      for (let i = 0; i < testFunctions.length; i++) {
        const testCar = testFunctions[i];
        if (!testCar(car)) {
          carAcceptable = false;
          break;
        }
      }

      if (carAcceptable) carsResult.push(car);

    });
    return carsResult;
  },

  filters: {
    brand: {
      type: 'checkboxGroup',
      options: brandOptions
    },
    model: {
      type: 'checkboxGroup',
      options: modelOptions
    },
    year: {
      type: 'numberRange',
      min: minYear,
      max: maxYear,
      selectedMin: minYear,
      selectedMax: maxYear,
    }
  },

  changeFilters: ({ filterName, ...props }) => {
    const filter = carState.filters[filterName];

    switch (filter.type) {
      case "checkboxGroup":
        const { name, selected } = props;
        filter.options = filter.options.map(x => ({
          name: x.name,
          selected: x.name === name ? selected : x.selected
        }));
        break;

      case "numberRange":
        const { min, max } = props;
        filter.selectedMin = min;
        filter.selectedMax = max;
        break;

      default:
        console.error('Tokio filtro tipo n??ra')
    }
  }
}

const createCarTestFunctions = () => Object.entries(carState.filters)
  .map(([name, { type, options, selectedMin, selectedMax }]) => {
    switch (type) {
      case "checkboxGroup":
        const values = options.filter(x => x.selected).map(x => x.name);
        return (car) => values.includes(car[name]);

      case "numberRange":
        const min = selectedMin;
        const max = selectedMax;
        return (car) => {
          const numValue = car[name];
          return numValue <= max && numValue >= min
        }
      default:
        throw TypeError('Tokio filtro tipo n??ra');
    }
  });

export const CarContext = createContext(carState);

export const CarProvider = ({ children }) =>
  <CarContext.Provider value={carState}>{children}</CarContext.Provider>


