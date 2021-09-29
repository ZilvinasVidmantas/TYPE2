console.log('---------------class prototipai.js-----------------------');
// class tai prototipo kūrimas, naudojant gražesnę ir suprantamesnę sintaksę
class Vehicle {
  constructor(brand, model, year) {
    // this, tai nauja atminties vieta.
    // Dažniausiai kontruktoriuje argumentų reikšmes pririšame prie naujai kuriamos atminties vietos.
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showFullName() {
    // this, yra tai kas iškvietė metodą
    /*
    | call                            | this             | this.brand | this.model  |
    | ----------------------------------------------------------------------------- |
    | myVehicle.showFullName()        | myVehicle        | "Peugeot"  | "406 Coupe" |
    | mySistersVehicle.showFullName() | mySistersVehicle | "Skoda"    | "T100"      |
    */
    console.log(this.brand + ' ' + this.model);
  };

  showAge() {
    // this, yra tai kas iškvietė metodą
    console.log(new Date().getFullYear() - this.year);
  }
}

const myVehicle = new Vehicle("Peugeot", "406 Coupe", 1998);
console.log(myVehicle);
myVehicle.showFullName();
myVehicle.showAge();

const mySistersVehicle = new Vehicle("Skoda", "T100", 2010);
console.log(mySistersVehicle);
mySistersVehicle.showFullName();
mySistersVehicle.showAge();
console.log('---------------class prototipai.js-----------------------');

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