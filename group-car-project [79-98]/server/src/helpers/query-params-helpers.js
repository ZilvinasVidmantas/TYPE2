const createQueryParamsArr = (queryParams) => {
  const queryParamsArray = Object.entries(queryParams);

  return queryParamsArray.map(([name, value]) => ([
    name,
    value instanceof Array ? [...new Set(value)] : [value]
  ]))
};

const filterQueryParams = (queryParams, names) => {
  const paramsArray = createQueryParamsArr(queryParams);
  const filteredObj = paramsArray.filter(([name]) => names.includes(name));

  return filteredObj.reduce((result, [name, value]) => {
    result[name] = value;

    return result;
  }, {});
};

const createQueryParamArray = (queryParams, names) => {
  const filteredArr = filterQueryParams(queryParams, names);

  return Object.entries(filteredArr);
}

module.exports = {
  createQueryParamsArr,
  filterQueryParams,
  createQueryParamArray,
};