// Pradiniai duomenys
const data = [
  { street: 'Savanorių g. 10', city: 'Vilnius', type: 'flat', price: 90000, rooms: [24, 31] },
  { street: 'Verkių g. 10', city: 'Vilnius', type: 'house', price: 150000, rooms: [24, 16, 14, 12] },
  { street: 'Jaunimo g. 17', city: 'Vilnius', type: 'cottage', price: 120000, rooms: [10, 10, 16, 14, 12] },
  { street: 'Veidrodžių g. 75', city: 'Vilnius', type: 'house', price: 220000, rooms: [24, 16, 16, 14, 12] },
  { street: 'Gedimino pr. 18', city: 'Vilnius', type: 'flat', price: 370000, rooms: [24, 32, 31] },
  { street: 'Jonavos g. 17', city: 'Kaunas', type: 'house', price: 90000, rooms: [18, 20, 12, 60] },
  { street: 'Savanorių pr. 21a', city: 'Kaunas', type: 'flat', price: 60000, rooms: [24, 30] },
  { street: 'Partizanų g. 55', city: 'Kaunas', type: 'flat', price: 75000, rooms: [20, 30, 16] },
  { street: 'Krantų pr. 18', city: 'Klaipėda', type: 'house', price: 77000, rooms: [17, 12, 10, 5] },
];

// Bendri kintamieji, klasės, funkcijos:
class Apartment {
  static #types = ['flat', 'house', 'cottage'];
  #type;

  constructor({ street, city, type, price, rooms }) {
    this.street = street;
    this.city = city;
    this.type = type;
    this.price = price;
    this.rooms = [...rooms];
  }

  set type(value) {
    if (Apartment.#types.includes(value)) {
      this.#type = value;
    }
  }

  get type() {
    return this.#type;
  }

  // 3.
  get address() {
    return this.street + ', ' + this.city;
  }

  // 4.
  get squares() {
    return this.rooms.reduce((sum, room) => sum + room);
  }

  // 5.
  get roomCount() {
    return this.rooms.length;
  }

  // 9. užduočiai sukurtas get'eris
  get squarePrice() {
    return this.price / this.squares;
  }
}

let apartments;

// Atsakymai:
console.group("1. Sukurkite klasę Apartment");
{
  const apartment = new Apartment({ street: 'Savanorių g. 10', city: 'Vilnius', type: 'flat', price: 90000, rooms: [24, 31] });
  console.log(Apartment);
  console.log(apartment);
}
console.groupEnd();

console.group("2. Naudodami <data> kintamojo duomenis, sukurkite masyvą sudarytą iš Apartment klasės objektų.");
{
  apartments = data.map(x => new Apartment(x));
  console.table(apartments);
}
console.groupEnd();

console.group("3. Klasėje Apartment sukurkite get'erį 'address' kuris grąžintų pilną būsto adresą, formatu: 'GATVĖ, MIESTAS'.");
{
  apartments.forEach(x => console.log(x.address));
}
console.groupEnd();

console.group("4. Klasėje Apartment sukurkite get'erį 'squares' kuris grąžina visą būsto kvadratūrą.");
{
  apartments.forEach(x => console.log(x.squares));
}
console.groupEnd();

console.group("5. Klasėje Apartment sukurkite get'erį 'roomCount' kuris grąžina būsto kambarių skaičių.");
{
  apartments.forEach(x => console.log(x.roomCount));
}
console.groupEnd();

console.group("6. Atrinkite ir atspausdinkite visus būstus iš Vilniaus, kurių tipas yra 'flat'");
{
  const result = apartments.filter(x => x.city === 'Vilnius' && x.type === 'flat');
  console.table(result);
}
console.groupEnd();

console.group("7. Atrinkite ir atspausdinkite visus būstus NE iš Kauno, kurie yra didesni nei 4 kambarių.");
{
  const result = apartments.filter(x => x.city !== 'Kaunas' && x.roomCount > 4);
  console.table(result);
}
console.groupEnd();

console.group("8. Atrinkite ir atspausdinkite visus būstus kurių kvadratūra didesnė už 60.");
{
  const result = apartments.filter(x => x.squares > 60);
  console.table(result);
}
console.groupEnd();

console.group("9. Atrinkite visus būstus kurių vieno kvadrato kaina yra didesnė nei 2000");
{
  const result = apartments.filter(x => x.squarePrice > 2000);
  console.table(result);
}
console.groupEnd();

console.group("10. Suformuokite naują masyvą, performuodami [2.] užduoties masyvo objektus:");
{
  /*
    Apartment {      →      {
      street,        →        address,     String
      city,          →        type,        'flat'|'house'|'cottage'       
      type,          →        price,       Number
      price,         →        roomCount,   Number
      rooms,         →        squares,     Number
    }                →      }  
  */
  const result = apartments.map(({ address, type, price, roomCount, squares }) => ({ address, type, price, roomCount, squares }));
  console.table(result);
}
console.groupEnd();
