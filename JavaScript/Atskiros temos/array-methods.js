const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Naujo elemento pridėjimas į galą
let count = numbers.push(11);

// Naujo elemento pridėjimas į priekį
count = numbers.unshift(0);

// Elemento pašalinimas iš galo
let last = numbers.pop();

// Elemento pašalinimas iš priekio
let first = numbers.shift();

console.log(numbers);