/*
  Inkapsuliacija - tai objekto (arba klasės) savybių (arba metodų) prieinamumo valdymas;
  public - savybės ar metodai yra pasiekiami, ir gali būti keičiami iš bet kur (standartas)
  private - savybės ar metodai yra pasiekiami, ir gali būti keičiami tik klasės viduje. (turi rašyti #)

  Get'eteris (getter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei gauti. Get'eriai naudojami
    tuomet, kuomet norime pritaikyti inkapsuliacijos principus.

  Set'eteris (setter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei nustatyti. Set'eriai naudojami
    tuomet, kuomet norime pritaikyti inkapsuliacijos principus.

*/

class Person {

  // Privačios savybės
  #name;
  #surname;
  #age;

  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  get name() {
    return this.#name;
  }
  set name(n) {
    if (typeof n === 'string')
      this.#name = n;
    else console.error('Vardas turi būti simbolių darinys.')
  }

  get surname() {
    return this.#surname;
  }
  set surname(s) {
    if (typeof s === 'string')
      this.#surname = s;
    else console.error('Pavardė turi būti simbolių darinys.')
  }

  get age() {
    return this.#age;
  }

  set age(a) {
    if (typeof a === 'number' && a >= 0)
      this.#age = a;
    else console.error('Amžius turi būti sveikas skaičius, pradedant 0.')
  }
}

// const p1 = new Person('Serbentautas', 'Bordiūras', 17);
// const p2 = new Person(9, 'Medaitė', 19);

// p1.name = 7;
// p1.age = -8;

// const people = [
//   p1,
//   p2,
//   new Person('Austė', 'Gaustė', 35),
//   new Person('Severas', 'Sneipas', 75)
// ];

// console.table(people);


class Sleiks {

  #ilgis;

  constructor(ilgis) {
    // Senu būdu - priskyrimas metodo viduje
    this.setIlgis(ilgis);
    // Nauju būdu - ieškomas ilgis savybės set'eris
    this.ilgis = ilgis;
  }

  setIlgis(il) {
    //   ↙ čia turetų būti patikrinta nauja reikšmė
    if (true) {
      this.#ilgis = il;
    }
  }

  getIlgis() {
    //   ↙ čia turetų būti patikrintos apsaugos
    if (true) {
      return this.#ilgis;
    }
  }

  set ilgis(il) {
    //   ↙ čia turetų būti patikrinta nauja reikšmė
    if (true) {
      this.#ilgis = il;
    }
  }

  get ilgis() {
    //   ↙ čia turetų būti patikrintos apsaugos
    if (true) {
      return this.#ilgis;
    }
  }
}

// Sleiks Objekto kūrimas
const sleiks1 = new Sleiks(5);

// Savybės nustatymas - setteris
sleiks1.setIlgis(8);
// Savybės gavimas - getteris
// console.log(sleiks1.getIlgis());

// Dėka naujos sintaksės galime rašyti taip:

// Savybės nustatymas - setteris
sleiks1.ilgis = 9;
// Savybės gavimas - getteris
// console.log(sleiks1.ilgis);

// https://www.mathwarehouse.com/triangle-calculator/online.php
class Triangle {
  #sides;
  #angles;

  constructor(sides, angles) {
    // .. Matematiniai skaičiavimai, kurie pagal pakankamą kiekį duomenų suskaičiuoja trikampį
    this.#sides = {
      'AB': 5,
      'BC': 5,
      'CA': 6
    };
    this.#angles = {
      'A': 53,
      'B': 74,
      'C': 53,
    };
  }

  set AB(val) {
    this.#sides.AB = val;
  }

  get AB() {
    return this.#sides.AB;
  }

  setSideAB(newSideABLength) {
    // if bla bla bla
    // and if blA BLA BLA
    // then do this:
    this.#sides.AB = newSideABLength;
    // anc correct other sides and angles

    // else:
    // throw error or do nothing
  }

  getSideAB() {
    return this.#sides.AB;
  }

}

const hardCodedTriangle = new Triangle([5, 5], [45]);
// 1 ------------------------------- Veiksmai su metodais
const currentAB = hardCodedTriangle.getSideAB();
const newAB = hardCodedTriangle.getSideAB();
hardCodedTriangle.setSideAB(6);
// 2 ------------------------------- analogiški veiksmai su set'erio ir get'erio sintaksės pagrąžinimu
{
  const currentAB = hardCodedTriangle.AB; // Getterio naudojimas,
  hardCodedTriangle.AB = 6; // Set'erio naudojimas, reikšmė už lygybės pateks į set'erio funkcijos parametrą
  const newAB = hardCodedTriangle.AB; // Getterio naudojimas,
}
console.log({
  currentAB,
  newAB,
  hardCodedTriangle
})