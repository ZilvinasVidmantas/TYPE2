const filterParamsTypes = [{
  name: 'brand',
  type: 'one-to-many'
}, {
  name: 'model',
  type: 'one-to-many'
}, {
  name: 'transmission',
  type: 'one-to-many'
}, {
  name: 'fuelType',
  type: 'many-to-many'
}, {
  name: 'price_lte',
  type: 'lte'
}, {
  name: 'price_gte',
  type: 'gte'
}, {
  name: 'year_gte',
  type: 'gte'
}, {
  name: 'year_lte',
  type: 'lte'
}];

const sortingParamsNames = ['_sort_asc', '_sort_desc'];

module.exports = {
  filterParamsTypes,
  sortingParamsNames
}