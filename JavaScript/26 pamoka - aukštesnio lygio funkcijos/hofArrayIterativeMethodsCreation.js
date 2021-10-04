const arr = [1, 2, 3, 4, 5, 6];

const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const map = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

console.group('forEach panaudojimo pavyzdys');
{
  forEach(arr, console.log);
}
console.groupEnd();

console.group('map panaudojimo pavyzdys');
{
  console.log({
    arr,
    numbersDoubled: map(arr, x => x * 2),
    numbersSquared: map(arr, x => x ** 2)
  });
}
console.groupEnd();


