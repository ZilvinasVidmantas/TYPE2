const arr = [1, 2, 3, 4, 5, 6];

const forEach = (arr, doStuff) => {
  for (let i = 0; i < arr.length; i++) {
    doStuff(arr[i], i, arr);
  }
}

const map = (array, changeElement) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(changeElement(array[i], i, array));
  }
  return newArray;
}

const filter = (array, isTruthy) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(isTruthy(array[i], i, array)){
      newArray.push(array[i]);
    }
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

console.group('filter panaudojimo pavyzdys');
{
  console.log({
    arr,
    numbersEqual: map(arr, x => x % 2 === 0),
    numbersOdd: map(arr, x => x % 2 === 1)
  });
}
console.groupEnd();


