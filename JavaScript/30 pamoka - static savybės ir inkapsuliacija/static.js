//  Ši class sintaksė yra pakaitalas funkcijoms kurios gamina prototipus
class Bankas {
  static viliboras = 0.48;
  static gautiCentrinioBankoDuomenis() {
    return 'Duomenys: ' + new Date().getMilliseconds() + ' - ' + Bankas.viliboras;
    // Logika gauti duomenims susisijusios su valiutomis
  }

  static keistiVilibora(naujasViliboras) {
    Bankas.viliboras = naujasViliboras;
    // Logika gauti duomenims susisijusios su valiutomis
  }

  static copy(oldBank) {
    const newBank = new Bankas(oldBank.name);
    // kopijavimo logika ...
    return newBank;
  }

  constructor(name, contracts) {
    this.name = name;
    this.contracts = contracts ?? [];
    this.money = this.contracts.reduce((money, contract) => money + contract.money, 0);
  }

  detiIndeli(person, amount) {
    console.log(person.name, amount);
    this.contracts.push({
      ...person,
      money: amount
    });
    this.money += amount;
  }
}

//  Kuriami objektai
const swed = new Bankas('Swedbank');
const seb = new Bankas('SEB');
const luminor = new Bankas('Luminor');

// 9:05
console.log('------------------      Klase---------------------------')
console.dir(Bankas);
console.log('------------------ Klasės Objektas ---------------------------')
console.dir(swed);

//  Standartiniai metodai, kviečiami naudojant objektus
// swed.detiIndeli(500, 11111111111);
// seb.detiIndeli(1000, 11111111111);

setInterval(() => {
  // statiniai metodai kviečiami naudojant klases.
  const esantysDuomenys = Bankas.gautiCentrinioBankoDuomenis();
  // console.log(esantysDuomenys);
}, 1000);

//  Statiniai metodai dažniausiai naudojami, pagalbinėms funkcijos, bendroms konstantos ir objektų kopijavimui įgalinti 
const naujasBankas = Bankas.copy(swed);
naujasBankas.name = 'Naujas';
// console.log(naujasBankas);
// console.log(swed);

// Apvalinimas
const value = 6416.654654654;
// console.log(typeof value.toFixed(0));
// console.log(typeof Math.round(value));

const people = [
  {
    weight: 60,
    height: 1.50
  },
  {
    weight: 80,
    height: 1.55
  },
  {
    weight: 30,
    height: 1.80
  },
  {
    weight: 160,
    height: 1.50
  },
]
const skaiciaiPoKablelio = 0; // TAI GALĖTŲ BŪTI STATINĖ SAVYBĘ SKAIČIAVIMŲ KLASĖJE
//                                                      Statinis metodas - round
const KMIindexes = people.map(({ weight, height }) =>
  Math.round(10 ** skaiciaiPoKablelio * weight / height ** 2) / 10 ** (skaiciaiPoKablelio)
);
//                                                 Apvalinimas 2 skaičiai po kablelio
//                                                 Padauginam iš 100, suapvalinam, padalinam iš 100
// console.log(KMIindexes);

class Šablonas {
  static šablonoSavybė = 50;
  static šablonoSavybė2 = [];

  static šablonoMetodas1(param1, param2){
    // ... kodas
  }

  static šablonoMetodas2(...params){
    // ... kodas
  }

  constructor(param1, param2, param3){
    this.kuriamoObjektoSavybė1 = param1 + param2;
    this.kuriamoObjektoSavybė2 = param3;
    this.kuriamoObjektoSavybė3 = [];
  }

  kuriamoObjektoMetodas1(param1){
    // ... kodas
  }

  kuriamoObjektoMetodas2(){
    // ... kodas
  }
}

const sukurtasObjektasPagalŠabloną = new Šablonas('Kefyras', 'Rūgpienis', 39845781454);