class Person {
  static count = 0;

  #id;
  #name;
  #surname;

  constructor(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
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

  get name(){
    return this.#name;
  }

  set surname(newSurname) {
    newSurname = newSurname.toLowerCase();
    if (!/^[a-ząčęėįšųūž]{2,16}$/.test(newSurname)) throw new TypeError(`Pavardė privalo būti be tarpų, nuo 2 iki 16 simbolių. Gauta:\n\t${newSurname}`);
    this.#surname = newSurname[0].toUpperCase() + newSurname.slice(1);
  }

  get surname(){
    return this.#surname;
  }

  get fullname() {
    return this.#name + ' ' + this.#surname;
  }

  get birthDate(){
    // kodas čia
  }

  get sex(){
    // kodas čia
  }
}

const people = [
  new Person('39301015555', 'KiBIras', 'Kiauraitis'),
  new Person('49601025555', 'Kumpė', 'Rūkelytė'),
  new Person('39101035555', 'Saulėnas', 'Akinys'),
  new Person(49001045555, 'Lempa', 'Stalinskaitė')
];

/*
  https://lt.wikipedia.org/wiki/Asmens_kodas
  Parašyti get'erį, kuris grąžintų gimimo datą, tokiu formatu:
    yyyy-mm-dd
  Parašyti get'erį, kuris grąžintų lytį
*/
console.log('gimimo datos');
people.forEach(p => console.log(p.birthDate));
console.log('lytys');
people.forEach(p => console.log(p.sex));