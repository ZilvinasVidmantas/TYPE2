const applySorting = (data, queryParams) => {
  let sortedData = data;
  sortedData = data.sort((a, b) => a[queryParams._sort_asc] - b[queryParams._sort_asc]);
  sortedData = data.sort((a, b) => b[queryParams._sort_desc] - a[queryParams._sort_desc]);

  return sortedData;
}

module.exports = {
  applySorting
};
