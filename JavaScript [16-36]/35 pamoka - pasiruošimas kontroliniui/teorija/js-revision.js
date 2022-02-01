const people = [
  {
    name: "Jovita",
    surname: "Lazdauskienė",
    age: 19,
    height: 160,
    weight: 97,
    sex: "female",
  },
  {
    name: "Janė",
    surname: "Piktutytė",
    age: 23,
    height: 168,
    weight: 67,
    sex: "female",
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    age: 54,
    height: 190,
    weight: 65,
    sex: "male",
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    age: 45,
    height: 187,
    weight: 80,
    sex: "male",
  },
  {
    name: "Lapė",
    surname: "Uostauskienė",
    age: 66,
    height: 157,
    weight: 80,
    sex: "female",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    age: 55,
    height: 186,
    weight: 78,
    sex: "female",
  },
  {
    name: "Jolanta",
    surname: "Baksnaitė",
    age: 15,
    height: 149,
    weight: 80,
    sex: "female",
  },
  {
    name: "Jurgis",
    surname: "Dešinys",
    age: 35,
    height: 167,
    weight: 89,
    sex: "male",
  },
];

console.groupCollapsed('------------------------------------ 1 Dalis ------------------------------------');
{
  // BMI = mass(kg) / height(m)**2
  const calcBMI = (weight, heightCM) => Math.round(10 * weight / (heightCM / 100) ** 2) / 10;

  console.groupCollapsed('1. Sukurti objektų(žmonių) masyvą su 8 elementais');
  {
    console.table(people);
  }
  console.groupEnd();

  console.groupCollapsed('2. Panaudojant Array.prototype.forEach:');
  {
    console.group('Atspausdinti kiekvieną elementą');
    {
      people.forEach(p => console.log(p));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento pilną vardą');
    {
      people.forEach(({ name, surname }) => console.log(`${name} ${surname}`));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento kūno masės indeksą');
    {
      people.forEach(({ weight, height }) => console.log(calcBMI(weight, height)));
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('3. Panaudojant Array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:');
  {
    console.group('kurių vardas ilgesnis nei 6 simboliai');
    {
      const peopleWithShortNames = people.filter(p => p.name.length > 6);
      console.table(peopleWithShortNames);
    }
    console.groupEnd();
    console.group('kurių svoris didesnis nei 80kg');
    {
      const peopleHeavy = people.filter(p => p.weight > 80);
      console.table(peopleHeavy);
    }
    console.groupEnd();
    console.group('kurie aukštesni nei 185cm');
    {
      const peopleTall = people.filter(p => p.height > 185);
      console.table(peopleTall);
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('4. Panaudojant Array.prototype.map atrinkti į naują masyvą ir po to atspausdinti');
  {
    console.group('ūgius');
    {
      console.table(people.map(p => p.height));
    }
    console.groupEnd();
    console.group('svorius');
    {
      console.table(people.map(p => p.weight));
    }
    console.groupEnd();
    console.group('ūgius, svorius ir amžius');
    {
      console.table(people.map(({ weight, height, age }) => ({ weight, height, age })));
    }
    console.groupEnd();
    console.group('KMI indeksus');
    {
      console.table(people.map(({ weight, height }) => calcBMI(weight, height)));
    }
    console.groupEnd();
    console.group('KMI indeksus ir amžius');
    {
      console.table(people.map(({ weight, height, age }) => ({
        age,
        bmi: calcBMI(weight, height)
      })));
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('5. Panaudojant Array.reduce suskaičiuoti ir po to atspausdinti');
  {
    console.group('svorių vidurkį');
    {
      console.log(people.reduce((sum, p) => sum + p.weight, 0) / people.length);
    }
    console.groupEnd();
    console.group('ūgių vidurkį');
    {
      console.log(people.reduce((sum, p) => sum + p.height, 0) / people.length);
    }
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('------------------------------------ 2 Dalis ------------------------------------');
{
  class Person {
    name;
    surname;
    height;
    weight;
    sex;
    age;

    constructor({ name, surname, height, weight, sex, age }) {
      this.name = name;
      this.surname = surname;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
      this.age = age;
    }

    get bmi() {
      return Math.round(10 * this.weight / (this.height / 100) ** 2) / 10;
    }

    get string() {
      const { name, surname, ...rest } = this;
      const propString = Object.entries(rest)
        .filter(([_, propVal]) => typeof propVal !== 'function')
        .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, '');
      return `${name} ${surname}:` + propString;
    }

    getBMI = () => {
      return Math.round(10 * this.weight / (this.height / 100) ** 2) / 10;
    }

    toString = () => {
      const { name, surname, ...rest } = this;
      return Object.entries(rest)
        .filter(([_, propVal]) => typeof propVal !== 'function')
        .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, `${name} ${surname}:`);
    }
  }

  const peopleArr = people.map(p => new Person(p));

  console.group('0. Pasinaudojant 1 dalies asmens apibūdinimu, sukurti Person klasę, kuri apipavidalina tokio tipo objektą');
  {
    console.table(peopleArr);
    peopleArr.forEach(p => console.log(p.getBMI()));
    // peopleArr.forEach(p => console.log(p.bmi));
    peopleArr.forEach(p => console.log(p.toString()));
    // peopleArr.forEach(p => console.log(p.string));
  }
  console.groupEnd();

  console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ');
  {
    const result = peopleArr.filter(p => p.sex === 'female' && p.age < 20 && p.weight > 70);
    console.table(result);
  }
  console.groupEnd();

  console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
  {
    const result = peopleArr.filter(p => p.sex === 'male' && p.age > 25 && p.getBMI() < 18.5);
    console.table(result);
  }
  console.groupEnd();

  console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
  {
    const result = peopleArr.filter(p => p.age < 18 && p.getBMI() > 30);
    console.table(result);
  }
  console.groupEnd();

  console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
  {
    const result = peopleArr.filter(p => p.age >= 65 && p.getBMI() > 30);
    console.table(result);
  }
  console.groupEnd();

  console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
    const result = peopleArr.filter(p => {
      const bmi = p.getBMI();
      return bmi < 18.5 || bmi > 25;
    });
    console.table(result);
  }
  console.groupEnd();
}
console.groupEnd();
