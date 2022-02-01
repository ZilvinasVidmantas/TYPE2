const filterFunctionsCreators = {
  'one-to-many': (name, values) => (entity) => values.includes(entity[`${name}Id`]),
  'many-to-many': (name, values) => (entity) => values.some((id) => entity[`${name}Id`].includes(id)),
  'gte': (name, values) => {
    const min = Math.min(...values.map(Number));
    const prop = name.slice(0, -4);
    return (entity) => min <= entity[prop];
  },
  'lte': (name, values) => {
    const max = Math.max(...values.map(Number));
    const prop = name.slice(0, -4);
    return (entity) => max >= entity[prop];
  }
};

const createFilterFunctions = (paramsArr, types) => {
  return paramsArr.map(([name, values]) => {
    const filterParamType = types.find(type => type.name === name).type;
    const filterFunctionCreator = filterFunctionsCreators[filterParamType];
    const filterFn = filterFunctionCreator(name, values);
    return filterFn;
  });
}

const applyFilters = (collection, filtersFunctions) => {
  return filtersFunctions.reduce(
    (filteredCollection, filterFn) => filteredCollection.filter(filterFn),
    collection
  );
}

module.exports = {
  filterFunctionsCreators,
  createFilterFunctions,
  applyFilters
}
