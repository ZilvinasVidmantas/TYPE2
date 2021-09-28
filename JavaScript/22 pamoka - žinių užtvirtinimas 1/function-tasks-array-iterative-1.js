const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printPerson(person) {
    console.log(person);
    // console.log(person.name, person.surname, person.sex, person.income, person.age, person.married, person.hasCar);
  }

  people.forEach(printPerson);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  function printFullname(person) {
    console.log(person.name + '-' + person.surname);
  }

  people.forEach(printFullname);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printFullnameAndMarried(person) {
    console.log(`${person.name} ${person.surname}: ${person.married ? 'married' : 'not married'}`);
    // console.log(person.name, person.surname + ':', person.married ? 'married' : 'not married');
    // console.log(person.name + ' ' + person.surname + ': ' + (person.married ? 'married' : 'not married'));
  }

  people.forEach(printFullnameAndMarried);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function getSexAndIncome(person) {
    return {
      sex: person.sex,
      income: person.income
    };
  }

  const sexAndIncomeData = people.map(getSexAndIncome);
  console.table(sexAndIncomeData);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function getNameSurnameSex(person) {
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex
    };
  }

  const nameSurnameSexData = people.map(getNameSurnameSex);
  console.table(nameSurnameSexData);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printMale(person) {
    if (person.sex === 'male') {
      console.log(person);
    }
  }

  people.forEach(printMale);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printFemale(person) {
    if (person.sex === 'female') {
      console.log(person);
    }
  }

  people.forEach(printFemale);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function printDriverFullname(person) {
    if (person.hasCar) {
      console.log(person.name, person.surname);
    }
  }

  people.forEach(printDriverFullname);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function printFullnameIfMarried(person) {
    if (person.married) {
      console.log(person);
    }
  }

  people.forEach(printFullnameIfMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // Sprendimas su Array.prototype.forEach
  {
    const driverCountBySex = {
      male: 0,
      female: 0
    };

    function accumulateDriverCount(person) {
      if (person.hasCar) {
        if (person.sex === 'male') driverCountBySex.male++;
        else driverCountBySex.female++;
      }
    }
    people.forEach(accumulateDriverCount);
    console.log(driverCountBySex);
  }
  // Sprendimas su Array.prototype.map
  {
    function isMaleDriver(person) {
      return person.hasCar && person.sex === 'male' ? 1 : 0;
    }

    function isFemaleDriver(person) {
      return person.hasCar && person.sex === 'female' ? 1 : 0;
    }

    function accumulateSum(sum, component) {
      return sum + component;
    }

    const driverCountBySex = {
      male: people.map(isMaleDriver).reduce(accumulateSum),
      female: people.map(isFemaleDriver).reduce(accumulateSum)
    };
    console.log(driverCountBySex);
  }
  // Sprendimas su Array.prototype.filter
  {
    function isMaleDriver(person) {
      return person.hasCar && person.sex === 'male';
    }

    function isFemaleDriver(person) {
      return person.hasCar && person.sex === 'female';
    }

    const driverCountBySex = {
      male: people.filter(isMaleDriver).length,
      female: people.filter(isFemaleDriver).length
    };
    console.log(driverCountBySex);
  }
  // Statiškas sprendimas su Array.prototype.reduce
  {
    function accumulateDriverBySex(driverCountBySex, person) {
      if (person.hasCar) {
        if (person.sex === 'male') driverCountBySex.male++;
        else driverCountBySex.female++;
      }
      return driverCountBySex;
    }
    const driverCountBySex = people.reduce(accumulateDriverBySex, { male: 0, female: 0 });
    console.log(driverCountBySex)
  }
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

