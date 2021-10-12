class Person {
  static #locales = {
    general: {
      active: true,
      formatDate: (yyyy, mm, dd) => `${yyyy}-${mm}-${dd}`
    },
    usa: {
      active: false,
      formatDate: (yyyy, mm, dd) => `${mm}-${dd}-${yyyy}`
    },
    chinese: {
      active: false,
      formatDate: (yyyy, mm, dd) => `${dd}-${mm}-${yyyy}`
    }
  };
  static #count = 0;
  static centuriesByIdFirstNumber = {
    1: '18',
    2: '18',
    3: '19',
    4: '19',
    5: '20',
    6: '20'
  };

  static get count() {
    return Person.#count;
  }

  static set locale(newLocale) {
    const localeNames = Object.keys(Person.#locales); // ['general', 'usa', 'chinese']
    if (!localeNames.includes(newLocale)) throw new TypeError(`Nėra tokios lokalės: '${newLocale}'. Galimos lokalės:\n\t${localeNames.join('\n\t')}`);
    // Naudojant ciklą nustatime visas lokales NE-aktyviomis
    for (const localeName in Person.#locales) {
      // iteracija | 1        | 2     | 3 
      // localName |'general' | 'usa' | 'chinese'
      // ---------------------------------------------
      // 1: Person.#locales['general'].active = false
      // 2: Person.#locales['usa'].active = false
      // 3: Person.#locales['chinese'].active = false
      Person.#locales[localeName].active = false;
    }
    // Nustatome aktyvią lokaciją
    Person.#locales[newLocale].active = true;
  }

  static get formatDate() {
    /*
      Person.#locales objektas paverčiamas reikšmių masyvu
        localeObjectArray: [
          0: {active: true, formatDate: ƒ}
          1: {active: false, formatDate: ƒ}
          2: {active: false, formatDate: ƒ}
        ]
    */
    const localeObjectArray = Object.values(Person.#locales);
    /*
      Surandame objektą, kurio savybe active yra true:
        currentLocaleObject: {active: true, formatDate: ƒ}
    */
    const activeLocaleObject = localeObjectArray.find(locale => locale.active);
    /*
      Grąžiname datos formatavimo funkciją, to objekto, kuris buvo aktyvus
        ƒ: (yyyy, mm, dd) => `${yyyy}-${mm}-${dd}
    */
    return activeLocaleObject.formatDate;
  }

  #id;
  #name;
  #surname;

  constructor(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    Person.#count++;
  }

  set id(newId) {
    newId = String(newId);
    if (this.#id !== undefined) throw new Error(`Negalima pakeisti jau sukurto žmogaus asmens kodo`);
    if (newId.length !== 11) throw new TypeError(`Kuriamo objekto savybė 'id' privalo būti sudaryta iš 11 skaitmenų. Gauta:\n\t${newId}`);
    if (!/^[\d]{11}$/.test(newId)) throw new TypeError(`Asmens kodas privalo būti sudarytas iš skaitmenų. Gauta:\n\t${newId}`);
    this.#id = newId;
  }

  get id() {
    return this.#id;
  }

  set name(newName) {
    newName = newName.toLowerCase();
    if (!/^[a-ząčęėįšųūž]{2,16}$/.test(newName)) throw new TypeError(`Vardas privalo būti be tarpų, nuo 2 iki 16 simbolių. Gauta:\n\t${newName}`);
    this.#name = newName[0].toUpperCase() + newName.slice(1);
  }

  get name() {
    return this.#name;
  }

  set surname(newSurname) {
    newSurname = newSurname.toLowerCase();
    if (!/^[a-ząčęėįšųūž]{2,16}$/.test(newSurname)) throw new TypeError(`Pavardė privalo būti be tarpų, nuo 2 iki 16 simbolių. Gauta:\n\t${newSurname}`);
    this.#surname = newSurname[0].toUpperCase() + newSurname.slice(1);
  }

  get surname() {
    return this.#surname;
  }

  get fullname() {
    return this.#name + ' ' + this.#surname;
  }

  get birthDate() {
    const yyyy = Person.centuriesByIdFirstNumber[this.#id[0]] + this.#id.slice(1, 3);
    const mm = this.#id.slice(3, 5);
    const dd = this.#id.slice(5, 7);
    //     (-> Person.formatData geterio reikšmė <-) (iškvietimas su argumentais)
    //     ((yyyy, mm, dd) => `${yyyy}-${mm}-${dd}}) (yyyy, mm, dd)
    return Person.formatDate(yyyy, mm, dd);
  }

  get sex() {
    return Number(this.#id[0]) % 2 === 1 ? 'vyras' : 'moteris';
  }

  get age() {
    const dateNow = new Date();
    const dateBirth = new Date(this.birthDate);
    const yearNow = dateNow.getFullYear();
    const yearBirth = dateBirth.getFullYear();
    const age = yearNow - yearBirth;
    return age;
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  }
}

const people = [
  new Person('39301015555', 'KiBIras', 'Kiauraitis'),
  new Person('49601025555', 'Kumpė', 'Rūkelytė'),
  new Person('39101035555', 'Saulėnas', 'Akinys'),
  new Person(49001045555, 'Lempa', 'Stalinskaitė')
];
console.groupCollapsed('Privačios statinės savybės panaudojimas');
{
  console.log('Person objektų kiekis:', Person.count);
  new Person('39301015555', 'KiBIras', 'Kiauraitis');
  Person.count = 77;
  console.log('Person objektų kiekis:', Person.count);
}
console.groupEnd();

console.groupCollapsed('Dinamiškas statinis seteris su validacija ir objekto metodo panaudojimas pagal statinio objekto būseną');
{
  console.group('gimimo datos general');
  {

    people.forEach(p => console.log(p.fullname, '-', p.birthDate));
    console.group('gimimo datos usa');
  }
  console.groupEnd();
  {
    Person.locale = 'usa';
    people.forEach(p => console.log(p.fullname, '-', p.birthDate));
  }
  console.groupEnd();
  console.group('gimimo datos chinese');
  {
    Person.locale = 'chinese';
    people.forEach(p => console.log(p.fullname, '-', p.birthDate));
  }
  console.groupEnd();
}
console.groupEnd();
