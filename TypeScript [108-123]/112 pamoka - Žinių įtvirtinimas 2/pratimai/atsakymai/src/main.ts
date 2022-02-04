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
  type GenerationNumber = -1 | -2 | -3 | 0 | 1 | 2 | 3;
  type Sex = 'm' | 'f';
  type GenTitleObject = {
    [key in GenerationNumber]: {
      [key in Sex]: string
    }
  };

  const genTitleObject: GenTitleObject = {
    '-3': { m: 'great grandfather', f: 'great grandmother' },
    '-2': { m: 'grandfather', f: 'grandmother' },
    '-1': { m: 'father', f: 'mother' },
    0: { m: 'me!', f: 'me!' },
    1: { m: 'son', f: 'daughter' },
    2: { m: 'grandson', f: 'granddaughter' },
    3: { m: 'great grandson', f: 'great granddaughter' },
  };

  const solution = (g: GenerationNumber, s: Sex): string => genTitleObject[g][s];

  // Spausdinimas
  const sexes: Sex[] = ['m', 'f'];
  const generations: GenerationNumber[] = [-3, -2, -1, 0, 1, 2, 3];

  sexes.forEach(sex => {
    generations.forEach(gen => {
      console.log({ sex, gen }, '->', solution(gen, sex))
    })
  });
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

  type ObjectLikeArray<Type> = Array<[string, Type]>;
  type ObjectToArray = <T>(obj: { [key: string]: T }) => ObjectLikeArray<T>;
  type NumberObject = { [key: string]: number };
  type StringObject = { [key: string]: string };
  type PrimitiveObject = { [key: string]: number | string | boolean };

  const solution: ObjectToArray = (object) => {
    return Object.entries(object);
  }

  const obj1: NumberObject = { a: 1, b: 2 };
  const obj2: StringObject = { name: 'Sasaris', surname: 'Kova' };
  const obj3: PrimitiveObject = { name: 'Bekas', age: 12, sick: false };

  const res1: ObjectLikeArray<number> = solution(obj1);
  const res2: ObjectLikeArray<string> = solution(obj2);
  const res3: ObjectLikeArray<number | string | boolean> = solution(obj3);

  console.log(obj1, '->', res1);
  console.log(obj2, '->', res2);
  console.log(obj3, '->', res3);
}
console.groupEnd();


