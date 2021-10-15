const data = [
  { brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['dysel'], price: 800 },
  { brand: 'Tesla', model: 'Model 3', year: 2016, color: 'black', fuelTypes: ['electric'], price: 22000 },
  { brand: 'Toyota', model: 'Avensis', year: 2015, color: 'blue', fuelTypes: ['petrol'], price: 13000 },
  { brand: 'Audi', model: 'A6', year: 2015, color: 'black', fuelTypes: ['dysel', 'electric'], price: 14000 },
  { brand: 'Audi', model: 'A5', year: 2015, color: 'red', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2019, color: 'black', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2017, color: 'black', fuelTypes: ['petrol',], price: 15000 },
  { brand: 'Tesla', model: 'Model S', year: 2020, color: 'blue', fuelTypes: ['electric'], price: 38000 },
  { brand: 'Subaru', model: 'Impreza', year: 2010, color: 'green', fuelTypes: ['dysel', 'electric'], price: 6000 },
];
const usd_eur = 1.16;
/*
  SKIRTINGAS KONSTRUKTORIAUS VEIKIMAS PAGAL PARAMETRŲ TIPĄ - google.lt: 'function orverloading JS'
  class Car {
    static #constructorParams = ['brand', 'model', 'year', 'color', 'fuelTypes', 'price'];

    constructor(...args) {
      if (typeof args[0] === 'object')
        Car.#constructorParams.forEach(name => this[name] = args[0][name]);
      else
        Car.#constructorParams.forEach((name, i) => this[name] = args[i]);
    }
  }
*/

class Car {
  constructor({ brand, model, year, color, fuelTypes, price }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getFuelType = () => this.fuelTypes.join('/');

  get fuelType() { return this.fuelTypes.join('/') }

}
// Bendrai naudojami kintamieji
let cars;
let electricCars;
let petrolCars;

console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  const car = new Car({ brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['dysel'], price: 800 });
  console.log(car);
}
console.groupEnd();

console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų, naudodami duomenis <data>');
{
  cars = data.map(carData => new Car(carData));
  console.table(cars);
}
console.groupEnd();

console.group("3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'.");
{
  cars.forEach(x => console.log(x.getFuelType()));
  cars.forEach(x => console.log(x.fuelType));
}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`));
  cars.forEach(x => console.log(`${x.brand} ${x.model} - ${x.fuelType}`));
  cars.forEach(({ brand, model, getFuelType }) => console.log(`${brand} ${model} - ${getFuelType()}`));
  cars.forEach(({ brand, model, fuelType }) => console.log(`${brand} ${model} - ${fuelType}`));
}
console.groupEnd();

console.group('5. Atrinkite tik elektrinius automobilius');
{
  // 5. Atrinkite automobilius, kurių vienintelis kuro tipas yra 'electric'
  electricCars = cars.filter(x => x.fuelTypes.includes('electric') && x.fuelTypes.length === 1);
  const onlyElectric2 = cars.filter(x => x.fuelTypes.every(t => t === 'electric'));
  const onlyElectric3 = cars.filter(x => x.fuelType === 'electric');
  console.log({
    electric: electricCars,
    onlyElectric2,
    onlyElectric3
  });
  // 5. Atrinkite automobilius, kur nors vienas kuro tipas yra 'electric' (hibridai arba elektriniai)
  const hybridAndElectric1 = cars.filter(x => x.fuelTypes.includes('electric'));
  const hybridAndElectric2 = cars.filter(x => x.fuelTypes.some(t => t === 'electric'));
  const hybridAndElectric3 = cars.filter(x => x.fuelTypes.find(t => t === 'electric'));
  const hybridAndElectric4 = cars.filter(x => x.fuelTypes.findIndex(t => t === 'electric') !== -1);
  const hybridAndElectric5 = cars.filter(x => x.fuelTypes.indexOf('electric') !== -1);
  console.log({
    hybridAndElectric1,
    hybridAndElectric2,
    hybridAndElectric3,
    hybridAndElectric4,
    hybridAndElectric5
  })
}
console.groupEnd();

console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{
  // Padarė prielaida jog mišrūs kuro tipai netinka
  petrolCars = cars.filter(x => x.fuelType === 'petrol' && x.year > 2016);
  const petrolCars2 = cars.filter(x => x.fuelTypes.includes('petrol') && x.fuelTypes.length === 1 && x.year > 2016);
  const petrolCars3 = cars.filter(({ year, fuelType }) => fuelType === 'petrol' && year > 2016);
  console.log({
    petrolCars,
    petrolCars2,
    petrolCars3
  });
}
console.groupEnd();

console.group("7. Atrinkite 'audi' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai");
{
  // Darant prielaidą, jog reikia įvertinti raidžių dydi ir mums netinka automobiliai su VIENINTELIU 'dysel' 
  const audiCars1 = cars.filter(x => (x.brand === 'audi' || x.brand === 'Audi') && x.year >= 2012 && x.year <= 2016 && x.fuelType !== 'dysel');
  const neededBrand = ['audi', 'Audi'];
  const audiCars2 = cars.filter(x => neededBrand.includes(x.brand) && x.year >= 2012 && x.year <= 2016 && x.fuelType !== 'dysel');
  const audiCars3 = cars.filter(x => x.brand.toLowerCase() === 'audi' && x.year >= 2012 && x.year <= 2016 && x.fuelType !== 'dysel');
  console.log({
    audiCars1,
    audiCars2,
    audiCars3,
  });
  // Darant prielaidą, jog reikia įvertinti raidžių dydi ir mums netiknka automobiliai jei NORS VIENAS iš kuro tipų yra 'dysel' 
  const newAudiNotDyselCars1 = cars.filter(x =>
    x.brand.toLowerCase() === 'audi' &&
    x.year >= 2012 && x.year <= 2016 &&
    !x.fuelTypes.some(t => t === 'dysel')
  ); const newAudiNotDyselCars2 = cars.filter(x =>
    x.brand.toLowerCase() === 'audi' &&
    x.year >= 2012 && x.year <= 2016 &&
    !x.fuelTypes.includes('dysel')
  );
  console.log({
    newAudiNotDyselCars1,
    newAudiNotDyselCars2,
  });
}
console.groupEnd();

console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
  const avg1 = electricCars.reduce((sum, x) => sum + x.price, 0) / electricCars.length;
  const avg2 = electricCars.reduce((avg, x) => avg + x.price / electricCars.length, 0);
  const avg3 = electricCars.map(x => x.price).reduce((sum, x) => sum + x) / electricCars.length;
  console.log({
    avg1,
    avg2,
    avg3,
  });
}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
  const sum1 = petrolCars.reduce((sum, x) => sum + x.price, 0);
  const sum2 = petrolCars.map(x => x.price).reduce((sum, x) => sum + x);
  console.log({
    sum1,
    sum2
  })
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą');
/*
  * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
*/
{
  const carsFormatted1 = cars.map(car => {
    return {
      brand: car.brand,
      model: car.model,
      price: Math.round(car.price * usd_eur),
      fuelType: car.fuelType
    };
  });
  const carsFormatted2 = cars.map(car => ({
    brand: car.brand,
    model: car.model,
    price: Math.round(car.price * usd_eur),
    fuelType: car.fuelType
  }));
  const carsFormatted3 = cars.map(({ brand, model, price, fuelType }) => ({
    brand,
    model,
    price: Math.round(price * usd_eur),
    fuelType,
  }));
  console.table(carsFormatted1);
  console.table(carsFormatted2);
  console.table(carsFormatted3);
}
console.groupEnd();