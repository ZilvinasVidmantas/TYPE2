/*
  Curry metodologija tai vienas iš funkcinio programavimo principų. Funkcinis programavimas
  paremtas funkcijų kvietinių medžio hierarchija. Kartais darbui atlikti reikia kurti funkciją
  kuri priklauso nuo aplinkybių. Tuomet ir naudojame Curry metodologiją:
    FUNKCIJĄ, KURI GRĄŽINA FUNKCIJĄ.
  Ši metodologija tiesiogiai ir/arba netiesiogiai naudojama ir kituose programavimo dizaino šablonuose.
  Dar galite šią metodologiją rasti terminu "Higher order functions", kas reiškia tą patį:
    Tėvinės funkcijos kvietinio rezultatas yra vaikinė funkcija.

  Kviečiant tėvinę funkciją, sukuriama aplinka, kuri turi savo argumentus (tai ką perdavėte tėvinės funkcijos
  kvietinio metu) tai pat savo ruoštu gali turėti ir papildomus (kvietinio aplinkos) kintamuosius.
  Pačio curry principo esmė yra naudoti tėvinės funkcinio kvietinio argumentus ir/arba sukurtus aplinkos
  kintamuosius grąžinamosios (vidinės) funkcijos logikoje. 
  
  Grąžinus suformuotą funkciją, niekaip nebegalime grįžti prie tėvinės funkcijos kvietinio, pakeisti argumentų
  ar suformuotų to kvietinio aplinkos kintamųjų. Galime juos naudoti tik netiesiogiai - per suformuotą vaikinę
  (vidinę) funkciją ir tik tokiu būdu kuris aprašytas formuojant šią (vidinę) funkciją. 
  
  Tokiu būdu galime perduoti funkcionalumą, nesuteikiant galimybės koreguoti aplinkybių.
*/

// ----------------------------------- KISS -------------------------------------------
function pasiruoštiValgytiMieste(maistas) {
  return () => {
    if (maistas) {
      console.log(`Kaip gerai kas turiu savo maisto. Mmm... kaip yra skanu ${maistas}`);
    }
    else {
      console.log('Nuvarysiu į iki\'nę bandelių');
    }
  }
}

const valgytiTaiKasBuvoPasiruoštaPirmadieniui = pasiruoštiValgytiMieste('cepakai');
const valgytiTaiKasBuvoPasiruoštaAntradieniui = pasiruoštiValgytiMieste('blynai');
const valgytiTaiKasBuvoPasiruoštaTrečiadieniui = pasiruoštiValgytiMieste('sumuštiniai');

valgytiTaiKasBuvoPasiruoštaAntradieniui();

// -------------------------------------- Example 2 ------------------------------------

function createAdultValidator(country) {
  const adultAgeByCountry = {
    lt: 18,
    us: 21,
    ng: 16,
    sw: 20
  };
  const minAge = adultAgeByCountry[country];
  return function ({age}) {
    return age >= minAge
  }
  // return age => ({age}) >= minAge;
}

const people = [
  {
    fullname: 'Jakash Balut',
    age: 15,
  },
  {
    fullname: 'Kitar Mahumi',
    age: 17,
  },
  {
    fullname: 'Samantha Overheel',
    age: 19,
  },
  {
    fullname: 'Karolis Klasta',
    age: 20,
  },
  {
    fullname: 'Bergenn Sweekman',
    age: 22,
  }
]

const ltAgeValidator = createAdultValidator('lt');
const usAgeValidator = createAdultValidator('us');
const ngAgeValidator = createAdultValidator('ng');
const swAgeValidator = createAdultValidator('sw');

const adultsInLt = people.filter(ltAgeValidator);
const adultsInUs = people.filter(usAgeValidator);
const adultsInNg = people.filter(ngAgeValidator);
const adultsInSw = people.filter(swAgeValidator);

console.log('Pilnamečiai Lietuvoje');
console.table(adultsInLt);

console.log('Pilnamečiai Amerikoje');
console.table(adultsInUs);

console.log('Pilnamečiai Nigerijoje');
console.table(adultsInNg);

console.log('Pilnamečiai Švedijoje');
console.table(adultsInSw);



