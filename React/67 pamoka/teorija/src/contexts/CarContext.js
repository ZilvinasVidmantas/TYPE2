import React, { useState, createContext } from 'react';

const initCars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2000 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 },
  { id: 6, brand: 'Opel', model: 'UdyrAstra', year: 2016 },
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

const initFilters = {
  brand: {
    type: 'checkboxGroup',
    title: 'Markė',
    options: brandOptions
  },
  model: {
    type: 'checkboxGroup',
    title: 'Modelis',
    options: modelOptions
  },
  year: {
    type: 'numberRange',
    title: 'Metai',
    min: minYear,
    max: maxYear,
    selectedMin: minYear,
    selectedMax: maxYear,
  }
}

const carState = {
  cars: [],
  filters: [],
  changeFilters: () => new Error('You must use a Provider and implement logic')
};

export const CarContext = createContext(carState);

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(initCars);
  const [filters, setFilters] = useState(initFilters);

  const changeFilters = ({ filterName, ...props }) => {
    const filter = filters[filterName];

    switch (filter.type) {
      case "checkboxGroup":
        const { name, selected } = props;
        filter.options = filter.options.map(x => ({
          ...x,
          selected: x.name === name ? selected : x.selected
        }));
        break;

      case "numberRange":
        const { min, max } = props;
        filter.selectedMin = min;
        filter.selectedMax = max;
        break;

      default:
        console.error('Tokio filtro tipo nėra')
    }
    setFilters({ ...filters });
  }

  const filterCars = () => {
    const carsResult = [];
    const testFunctions = createCarTestFunctions();

    initCars.forEach(car => {
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
  }

  const createCarTestFunctions = () => Object.entries(carState.filters)
    .map(([name, { type, options, selectedMin, selectedMax }]) => {
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

  return (
    <CarContext.Provider value={{
      cars,
      filters,
      changeFilters
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContext;




