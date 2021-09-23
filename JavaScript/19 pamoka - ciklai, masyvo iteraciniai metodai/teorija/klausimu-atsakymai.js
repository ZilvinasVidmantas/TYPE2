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
