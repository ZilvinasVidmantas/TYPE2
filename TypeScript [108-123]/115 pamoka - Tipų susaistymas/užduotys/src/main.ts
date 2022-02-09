type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    married: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    hasCar: false,
  },
];

// !!! UŽDUOTIS ATLIKTI APRAŠANT TIPUS !!!
// !!! UŽDUOTIS ATLIKTI KURIANT FUNKCIJAS, pilnai jas aprašant tipais !!!
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  }

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  type TaskProps = {
    married: boolean,
    hasCar: boolean,
  }

  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  // type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type TaskProps = {
    name: Person["name"],
    surname: Person["surname"],
    sex: Person["sex"],
  }

  const selectTaskProps = ({ name, surname, sex }: Person): TaskProps => ({
    name, surname, sex
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
  type Male = {
    [Key in keyof Person]: Key extends 'sex' ? 'male' : Person[Key];
  }

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.table(people);
  console.table(males);
}
console.groupEnd();

console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
/*
  {
    male: 7,
    female: 8
  }
*/
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();
