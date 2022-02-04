const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  function solution(arr: number[]): number[] {
    return arr.map((x) => x < 0 ? x * -1 : x);
  }

  const result: number[] = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų suapvalintų iki sveikų skaičių');
{
  function solution(arr: number[]): number[] {
    return arr.map((x) => x - (x % 1));
  }

  const result: number[] = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd()

console.group('3. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo natūralių skaičių');
{
  function solution(arr: number[]): number[] {
    return arr.filter((x) => x > 0 && x - (x % 1) === x);
  }

  const result: number[] = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('4. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo kas antro elemento pradedant pirmu');
{
  function solution(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]);
    }

    return result;
  }

  const result = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('5. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo kas penkto elemento pradedant trečiu');
{
  function solution(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = 2; i < arr.length; i += 5) {
      result.push(arr[i]);
    }

    return result;
  }

  const result: number[] = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina visų elementų sumą');
{
  function solution(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num);
  }

  const result: number = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('7. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina visų elementų aritmetinį vidurkį');
{
  function solution(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num / arr.length, 0);
  }

  const result: number = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('8. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausią skaičių masyve.');
{
  function solution(arr: number[]): number {
    return Math.max(...arr);
  }

  const result: number = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('9. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią skaičių masyve.');
{
  function solution(arr: number[]): number {
    return Math.min(...arr);
  }

  const result: number = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('10. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina masyvą, kurio pirmas elementas yra mažiausia pradinio masyvo reikšmė, o antras grąžinamo masyvo elementas yra didiausia reikšmė pradiniame masyve.');
{
  type BinaryNumberTuple = [number, number];

  function solution(arr: number[]): BinaryNumberTuple {
    const sortedArr: number[] = [...arr].sort((a, b) => a - b);
    return [sortedArr[0], sortedArr[sortedArr.length - 1]];
  }

  const result: BinaryNumberTuple = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('11. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina objektą, kurio savybė "min" yra mažiausia pradinio masyvo reikšmė, o savybė "max" yra didiausia reikšmė pradiniame masyve.');
{
  type MinMaxObject = { min: number, max: number };

  function solution(arr: number[]): MinMaxObject {
    const sortedArr: number[] = [...arr].sort((a, b) => a - b);
    return {
      min: sortedArr[0],
      max: sortedArr[sortedArr.length - 1],
    };
  }

  const result: MinMaxObject = solution(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();


console.group('12 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

}
console.groupEnd();

console.group('13 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{

}
console.groupEnd();

console.group('14 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.group('15 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.group('16 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.group('17 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();




