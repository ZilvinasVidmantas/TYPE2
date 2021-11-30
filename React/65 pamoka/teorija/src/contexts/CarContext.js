import React, { createContext } from 'react';

const cars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2000 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
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
  cars,

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
        console.error('Tokio filtro tipo nėra')
    }
  }
}

const getFilteredCars = () => {
  const carsResult = [];
  const filters = Object.entries(carState.filters).map(([name, { type, options, selectedMin, selectedMax }]) => {
    const result = { name, type };
    switch (type) {
      case "checkboxGroup":
        result.values = options.filter(x => x.selected).map(x => x.name);
        break;
      case "numberRange":
        result.min = selectedMin;
        result.max = selectedMax;
        break;

      default:
        console.error('Tokio filtro tipo nėra');
    }

    return result;
  });


  cars.forEach(car => {
    let carAcceptable = true;

    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i];
      let breakCycle = false;

      switch (filter.type) {
        case "checkboxGroup":
          if (!filter.values.includes(car[filter.name])) {
            carAcceptable = false;
            breakCycle = true;
          }
          break;

        case "numberRange":
          const numValue = car[filter.name];
          if (!(numValue <= filter.max && numValue >= filter.min)) {
            carAcceptable = false;
            breakCycle = true;
          }
          break;
        default:
          console.error('Tokio filtro tipo nėra')
      }

      if (breakCycle) break;
    }

    if (carAcceptable) {
      carsResult.push(car);
    }
    console.groupEnd();
  });
  return carsResult;
}

const filteredCars = getFilteredCars();

console.log({
  filteredCars
});

// 10:50
// 11:05
// Klausimai atsakymai i6 esamo kodo
