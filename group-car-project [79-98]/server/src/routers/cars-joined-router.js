const { Router } = require('express');
const { createFilterFunctions, applyFilters } = require('../helpers/filters-helpers');
const { filterQueryParams, createQueryParamArray } = require('../helpers/query-params-helpers');
const { applySorting } = require('../helpers/sorting-helpers');
const { filterParamsTypes, sortingParamsNames } = require('../data/cars-joined-router-params');
const { applyPagination, paginationParamsNames } = require('../helpers/pagination-helpers');
const database = require('../../database.json');

const router = Router();
const getJoinedCar = ({
  modelId, userId, transmissionId, ...car
}) => {
  const {
    brands, models, users, transmissions, fuelTypes, carFuelTypes,
  } = database;

  const model = models.find((x) => x.id === modelId);
  const user = users.find((x) => x.id === userId);
  const brand = brands.find((x) => x.id === model.brandId);
  const transmission = transmissions.find((x) => x.id === transmissionId);
  const fuelType = carFuelTypes
    .filter((carFuelType) => carFuelType.carId === car.id)
    .map((fuelTypePivot) => fuelTypes.find((x) => x.id === fuelTypePivot.fuelTypeId).title)
    .join('|');

  return {
    brandId: model.brandId,
    fuelTypeId: carFuelTypes
      .filter((carFuelType) => carFuelType.carId === car.id)
      .map((fuelTypePivot) => fuelTypes.find((x) => x.id === fuelTypePivot.fuelTypeId).id), ...car,
    ...car,
    modelId,
    userId,
    transmissionId,
    model: model.title,
    brand: brand.title,
    user,
    fuelType,
    transmission: transmission.title,
  };
};

const formatFilterFunctions = (queryParams) => {
  const filterParamsNames = filterParamsTypes.map(x => x.name);
  const filterQueryParamsArr = createQueryParamArray(queryParams, filterParamsNames);
  const filterFunctions = createFilterFunctions(filterQueryParamsArr, filterParamsTypes);

  return filterFunctions;
};

/*
  Pasiūlymai:
    * query-param-helpers.js
      * filterQueryParams - padaryti kad ši funkcija grąžintų atfiltruotų savyubių objektą, o ne masyvą
      * Sukurti papildomą funkciją (createQueryParamArray), kuri query parametrų objektą pakeistų masyvų
    * Atlikus šiuos pakitimus, priderinti logiką, ten kur tai yra logiška
      *  Filtravimui naudoti queryParam masyvą
      *  Rikiavimui ir Puslapiavimui naudoti queryParam objektą ir ieškoti savybių objekte
*/
router.get('/', (req, res) => {
  const { cars } = database;
  const joinedCars = cars.map(getJoinedCar);
  const queryParams = req.query;

  // 1. Filtravimas
  const filterFunctions = formatFilterFunctions(queryParams);
  const filteredCars = applyFilters(joinedCars, filterFunctions);

  // 2. Rikiavimas
  const sortingParamsObj = filterQueryParams(queryParams, sortingParamsNames);
  const sortedCars = applySorting(filteredCars, sortingParamsObj);

  // 3. Puslapiavimas

  const paginationParamsObj = filterQueryParams(queryParams, paginationParamsNames);
  const paginatedCars = applyPagination(sortedCars, paginationParamsObj)

  res.json({
    data: paginatedCars,
    dataLength: filteredCars.length,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const { cars } = database;
  const car = getJoinedCar(cars.find((x) => x.id === id));

  res.json(car);
});

module.exports = router;

