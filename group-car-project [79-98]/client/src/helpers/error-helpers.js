export const dataFetchError = (err) => {
  if (err.response) {
    throw new Error('Server Error: Problems With Response');
  } else if (err.request) {
    throw new Error('Server Error: Problems With Request');
  } else {
    throw new Error('Error', err.message);
  }
};

export default dataFetchError;
// eslint requires default export, when file has one helper,
// when adding more helpers, it has to be changed to export without "default".
