const dateStr2DateTime = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString("lt-LT") + ' GMT+2';
};

module.exports = {
  dateStr2DateTime
};