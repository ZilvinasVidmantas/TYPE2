//  Prototipo kūrimas principas naudojant funkciją
{
  function createCar(brand, model, year, color) {
    const car = {
      brand,
      model,
      year,
      color,
      // Viduje objektų(prototipų) esančios funkcijos yra vadinamos metodais
      changeColor: function (color) {
        car.color = color;
      },
      displayColor: function () {
        console.log(car.color);
      }
    };
    return car;
  }

  const myCar = createCar('Peugeot', '406 Coupe', 1998, 'silver');
  const friendCar = createCar('Peogeot', '407', 2006, 'black');
  const uncleCar = createCar('BMW', '320d', 2006, 'black');

  const allCars = [myCar, friendCar, uncleCar];
  console.table(allCars);

  // Metodai kviečiami naufojant objektą. Metodo viduje yra pasiekiami tie patys kintamieji, kurie buvo naudojami kuriant objektą.
  myCar.displayColor();
  myCar.changeColor('red');
  friendCar.changeColor('blue');
  friendCar.changeColor('green');
  myCar.displayColor();
  console.table(allCars);
}

// Prototipo kūrimas
{
  function Car(brand, model, year, color) {
    // this - tai yra nuoroda į atminties vietą, kurią naudojant buvo iškviesta ši funkcija
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    if (!this.__proto__.changeColor) {
      this.__proto__.changeColor = function (color) {
        this.color = color;
      };
    }
    if(!this.__proto__.displayColor){
      this.__proto__.displayColor = function () {
        console.log(this.color);
      }
    }
  };

  // new - pasakoma, jog išskiriama nauja nuorodos tipo atminties vieta
  const myCar = new Car('Peugeot', '406 Coupe', 1998, 'silver');
  const friendCar = new Car('Peogeot', '407', 2006, 'black');
  const uncleCar = new Car('BMW', '320d', 2006, 'black');

  myCar.displayColor();
  myCar.changeColor('red');
  friendCar.changeColor('blue');
  friendCar.changeColor('green');
  myCar.displayColor();

  const allCars = [myCar, friendCar, uncleCar];
  console.table(allCars);
}

// Prototipo kūrimas naudojant 'class' raktažodį - ES5 'sintaksinis cukrus',
// jog prototipų kūrimas būtų panašesnis į programuotojams įprastą sintaksę
// Kintamieji, kurie yra priskiriami formuojamui objektui yra vadinami - savybėmis (properties)
// Vidinės funkcijos, kurios priskiriamos objektui, ar jo prototipui yra vadinamos - metodais (methods)
// Objektai sukurti pagal klasės(prototipo) šabloną programavimo literatūroje yra vadinami 
//  * 'instance of a class', arba tiesiog 'instance'
//  * object (kitose programavimo kalbose, obejktais yra vadinama - išskirta(sukurta) atminties vieta pagal klasės aprašą)
// lietuviškai artimiausiai apibūdinantys 'instance of a class' žodžiai galėtų būti:
//  * pavyzdinis vientas
//  * klasės šablono realizacija
//  * atskiras/vienetinis atvejis
//  * objektas (naudojamas kitose programavimo kalbose) - tai ką grąžina klasės konstruktorius
{
  class Car {
    // Metodas skirtas objektui(pagal Car prototipą) kurti
    constructor(brand, model, year, color) {
      // Savybės ...
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
    }

    // Metodai ....
    changeColor(color) {
      this.color = color;
    }
    
    displayColor() {
      console.log(this.color);
    }
  }
  const myCar = new Car('Peugeot', '406 Coupe', 1998, 'silver');
  const friendCar = new Car('Peogeot', '407', 2006, 'black');
  const uncleCar = new Car('BMW', '320d', 2006, 'black');

  myCar.displayColor();
  myCar.changeColor('red');
  friendCar.changeColor('blue');
  friendCar.changeColor('green');
  myCar.displayColor();

  const allCars = [myCar, friendCar, uncleCar];
  console.table(allCars);
  console.log(myCar);
}

// Klasės savybių ir emtodų rašymo tvarka
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
