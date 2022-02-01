'use strict';
// Prototipo kūrimas naudojant 'class' raktažodį - ES5 'sintaksinis cukrus',
// jog prototipų kūrimas būtų panašesnis į programuotojams įprastą sintaksę

// Kintamieji, kurie yra priskiriami formuojamui objektui yra vadinami - savybėmis (properties)
// Vidinės funkcijos, kurios priskiriamos objektui, ar jo klasei yra vadinamos - metodais (methods)

// Objektai sukurti pagal klasės šabloną programavimo literatūroje yra vadinami 
//  * 'instance of a class', arba tiesiog 'instance'
//  * object (kitose programavimo kalbose, objektais yra vadinama - išskirta(sukurta) atminties vieta pagal klasės šabloną)

// lietuviškai artimiausiai apibūdinantys 'instance of a class' žodžiai galėtų būti:
//  * pavyzdinis vientas
//  * klasės šablono realizacija
//  * atskiras/vienetinis atvejis
//  * objektas (naudojamas kitose programavimo kalbose) - tai ką grąžina klasės konstruktorius
class Car {
  // Metodas skirtas objektui kurti
  // jis iškviečiamas kaskart, kai kuriame naują klasės objektą
  constructor(brand, model, year, color) {
    // Savybės ...
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = 0;
  }

  // Metodai ....
  accelerate(amount) {
    this.speed += amount;
  }

  decelerate(amount) {
    this.speed -= amount;
    if (this.speed < 0) this.speed = 0;
  }

  changeColor(color) {
    this.color = color;
  }

  displayColor() {
    console.log(this.color);
  }
}

const myCar = new Car('Solaris', 'T3000', 2014, 'green');
const friendCar = new Car('Peogeot', '407', 2006, 'black');
const uncleCar = new Car('BMW', '320d', 2006, 'black');
const allCars = [myCar, friendCar, uncleCar];

// console.table(allCars);
// allCars.forEach(car => car.accelerate(20));
// console.table(allCars);

// myCar.displayColor();
// myCar.changeColor('red');
// myCar.displayColor();

// friendCar.displayColor();
// friendCar.changeColor('blue');
// friendCar.displayColor();
// friendCar.changeColor('green');
// friendCar.displayColor();

// console.table(allCars);

// Klasės savybių ir metodų rašymo tvarka
/*
class AXY {
  Statinės savybės
  Statiniai metodai
  privačios savybės
  viešos savybės // Dažniausiai nerašome

  konstruktorius

  metodai:
    set'eriai ir get'eriai
    objekto savybes keičiantys metodai
    savybes naudojantys metodai (dažniausiai spausdinimas)
}
*/

console.group('1. Sukurti metodą klasei Car kuris, mažintų Car objekto greitį ant nurodytos vertės');
{
  const baseAmount = 60;
  allCars.forEach(car => car.accelerate(100));
  console.log('All cars running at 100km/h');
  console.table(allCars);
  console.log(`Car deceleration by ${baseAmount} × carIndex...`);
  allCars.forEach((car, i) => car.decelerate(baseAmount * i));
  console.log('Results:');
  console.table(allCars);
}
console.groupEnd();
