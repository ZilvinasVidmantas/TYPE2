type PrimitiveType = string | number | boolean;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans: boolean[] = [true, true, true, true, false];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function solution<Type>(arr: Type[]): Type | undefined {
    return arr[0];
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function solution<Type>(arr: Type[]): Type | undefined {
    return arr[arr.length - 1];
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  function solution<Type extends PrimitiveType>(arr: Type[]): Type[] {
    const copy: Type[] = arr.map(x => x);
    return copy;
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]

  function solution<T extends PrimitiveType>(value: T, count: number): Array<T> {
    return Array.from(new Array(count)).map(_ => value);
  }

  // Spausdinimas
  type ArgumentSample = [PrimitiveType, number];

  const dataSamples: ArgumentSample[] = [
    ['a', 2],
    [77, 4],
    [true, 1],
  ];

  dataSamples.forEach(
    (args) => console.log(
      `solution(${args.join(', ')}):`,
      solution(...args)
    )
  );
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  function solution<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return [...arr1, ...arr2];
  }

  // Spausdinimas
  type ArgumentSample<T> = [T[], T[]];

  const args1: ArgumentSample<number> = [[1, 2, 3], [4, 5, 6]];
  const args2: ArgumentSample<string> = [['labas', 'mano', 'vardas'], ['yra', 'ponas', 'krabas']];
  const args3: ArgumentSample<boolean> = [[true, true, true], [false, false, false]];

  console.log({ args: args1, result: solution(...args1) });
  console.log({ args: args2, result: solution(...args2) });
  console.log({ args: args3, result: solution(...args3) });
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };


  function solution<Type>(initialValue: Type): IncapsulatedValueObject<Type> {
    let value: Type = initialValue;
    return {
      setValue: (newValue) => value = newValue,
      getValue: () => value,
    }
  }

  // Spausdinimas
  const value1: number = 7;
  const value2: Array<string> = ["Sidnius", "Mauricijus", "Penktasis"];
  const value3: { name: string, surname: string } = { name: 'Fanatijus', surname: 'Labdara' };

  const obj1 = solution(value1);
  const obj2 = solution(value2);
  const obj3 = solution(value3);

  console.log('initial values');
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  })

  console.log('changing values...');
  obj1.setValue(9);
  obj2.setValue(['Pakeista']);
  obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });
}
console.groupEnd();
