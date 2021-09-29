/*
Rekursija tai metodologija, kuomet funkcija kviečia pati save. Dažniausiai rekursija naudojama sprendinių paieškai ir jų palyginimui.
Pats rekursinis uždavinių sprendimas yra daug resursų naudojantis procesas ir reikėtų vengti jos naudojimo. Visgi susidaro situacijų,
kuomet neįmanoma numatyti sprendinių paieškos kiekio nepradėjus spręsti uždavinio, tuomet ir yra naudojama rekursija.

Privalomos salygos:
  1. Rekursija privalo turėti baigtinę salygą, kurią pasiekus nebedaromas sekantis rekursinis kvietinys;
  2. Rekursiniai kvietiniai visada turi artėti link baigtinės salygos.
*/

//  - - - - -  Rekursinės funkcijos

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function iterateThrough(arr, callback, ii = 0) {
  if (ii >= arr.length) return;
  callback(arr[ii], ii, arr);
  iterateThrough(arr, callback, ii + 1);
}

function iterateThroughReverse(arr, callback, ii = 0) {
  if (ii >= arr.length) return;
  iterateThroughReverse(arr, callback, ii + 1);
  callback(arr[ii], ii , arr);
}

function fibMember(n) {
  if (n < 1) return -1;
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibMember(n - 1) + fibMember(n - 2);
}

//  - - - - -  Pagalbinės funkcijos
function printArrElement(el, i) {
  console.log(`[${i}] => ${el}`);
}

//  - - - - - Rekursijos kvietinių pavyzdžiai 
// Faktorialas
console.log(factorial(6));
console.log(factorial(9));

// Iteravimas naudojant rekursija
const numbers = [1, 2, 3, 4];
console.log('IterateThrough')
iterateThrough(numbers, printArrElement);
console.log('\nIterateThroughReverse')
iterateThroughReverse(numbers, printArrElement);

// 
// 0, 1, 1, 2, 3, 5, 8, 13, 21
console.log(fibMember(3));
console.log(fibMember(6));
console.log(fibMember(40));