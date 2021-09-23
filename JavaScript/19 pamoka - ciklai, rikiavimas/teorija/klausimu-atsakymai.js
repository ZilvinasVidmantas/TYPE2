console.group('Sukurkite funkcija, kuri atspausdintų skaičių seką nuo pirmojo parametro iki antrojo');
{
  function printRange(from, to) {
    console.group(`printRange(${from}, ${to})`);
    {
      const isIncreasing = from < to;
      const numbers = [];
      let number = from;
      while (isIncreasing ? number <= to : number >= to) {
        numbers.push(number);
        number = isIncreasing ? number + 1 : number - 1;
      }
      console.log(numbers.join(' → '));
    }
    console.groupEnd();
  }
  printRange(3, 5);
  printRange(8, 11);
  printRange(3, -2);
  printRange(-1, -1);
}
console.groupEnd();

console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  function byPriceASC(drink1, drink2) {
    return drink1.price - drink2.price;
  }
  function byPriceDESC(drink1, drink2) {
    return -1 * byPriceASC(drink1, drink2);
  }

  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "cola", price: 10 },
    { name: "fanta", price: 90 },
    { name: "tea", price: 100 },
    { name: "coffe", price: 1110 },
    { name: "lime", price: 5 }
  ];
  const drinksByPriceASC = drinks.slice().sort(byPriceASC);
  const drinksByPriceDESC = drinks.slice().sort(byPriceDESC);

  console.log({
    drinks,
    drinksByPriceASC,
    drinksByPriceDESC
  });
}
console.groupEnd();
