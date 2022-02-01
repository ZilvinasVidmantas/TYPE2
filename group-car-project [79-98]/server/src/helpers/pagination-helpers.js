const paginate = (collection, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  return collection.slice(startIndex, endIndex);
};

const applyPagination = (data, queryParams) => {
  const pageNumber = queryParams._page ?? 1;
  const pageSize = queryParams._limit ?? 20;

  return paginate(data, pageNumber, pageSize);
}

const paginationParamsNames = ['_page', '_limit'];

module.exports = {
  applyPagination,
  paginationParamsNames,
};
