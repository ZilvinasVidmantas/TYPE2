// Salyginiai sakiniai - tai kodo vykdymas priklausomai nuo salygos.
// Jeigu salyga yra teisinga(true), yra vykdomas kodo blokas, jei salyga yra neteisinga(false)
// vykdomas 'else' kodo blokas(jeigu toks yra aprašytas).

//-- Salygų eiliškumas sudėtinėse salygose:
/*
salyga1 || salyga2 || ... || salygaN. Operatorius '||' tikrina salygas iš kairės į dešinę, jeigu nors viena salyga yra
true - sekančios nėra tikrinamos.
 
salyga1 && salyga2 && ... && salygaN. Operatorius '&&' tikrina salygas iš kairės į dešinę, jeigu nors viena salyga yra
false - sekančios nėra tikrinamos. 

SVARBU:
Rašant sudėtines salygas, pirmiausia reikėtų rašyti tas tikrinimus,
kurie turi didžiausią tikimybę nutraukti kitų salygų tikrinimą.
 
-- salygos:
---- a - Turit pinigų ( labiausiai tikėtina )
---- b - Gyvenat užmiesty ( vidutiniškai tikėtina )
---- c - per paskutinius metus buvo krizė (mažiausiai tikėtina)
 
Pirksit mašiną, jeigu visos salygos teisingos:
if( !c && b && a) {
  ... automobilio pirkimo kodas ...
}
 
Pirksit mašiną, jeigu nors viena salyga yra true:
if( a || b || !c) {
  ... automobilio pirkimo kodas ...
}
 
Pirksit mašiną, jeigu nėra krizės ir turit pinigų, arba gyvent užmiestį
if( b || (!c && a))
 
Pirksit mašiną, tik tuo atveju kai nėra krizės ir taip pat tenkinamos nors viena iš šių salygų:
  * turit pinigų
  * gyvenat užmiestį
if( !c && (a || b) )
*/

console.group('--- Tęstiniai if-else-if sakiniai ---');
{
  const lyja = true;
  const yraMaistoProduktu = true;
  const yraPinigu = true;

  console.log({ lyja, yraMaistoProduktu, yraPinigu });
  if (lyja) {
    console.log('Žaisti stalo žaidimus');
  } else if (yraMaistoProduktu) {
    console.log('Eiti į parduotuvę');
  } else if (yraPinigu) {
    console.log('Užsisakyti maisto į namus');
  } else {
    console.log('Mesti svorį');
  }
}
console.groupEnd();
console.log('-------------------------\n');

console.group('--- Tęstiniai switch sakiniai ---');
{
  const todayDate = new Date();
  const weekDayNumber = todayDate.getDay();
  let weekDay;
  switch (weekDayNumber) { // Tikrinamas Number kintamasis
    case 1: weekDay = 'Pirmadienis'; break;
    case 2: weekDay = 'Antradienis'; break;
    case 3: weekDay = 'Trečiadienis'; break;
    case 4: weekDay = 'Ketvirtadienis'; break;
    case 5: weekDay = 'Penktadienis'; break;
    case 6: weekDay = 'Šeštadienis'; break;
    case 0: weekDay = 'Sekmadienis'; break;
    default: console.error('Savaitės dienos gali būti tik nuo 0-6.');
  }
  console.log({ weekDayNumber, weekDay })
}
console.groupEnd();
console.log('-------------------------\n');

console.group('----- Ternary operatorius -----');
{
  /*
    Ternary operatorius, arba 'inline if' tai būdas aprašyti salyginį sakinį vienoje eilutėje. Jis naudojamas, kuomet
    priskiriame reikšmę, ją spausdiname, ar viduje if salyginio sakinio norime atlikti nedidelį komandų kiekį.
    Taip pat ternary operatorius leidžia išlaikyti 'const' kintamojo apribojimą, priskiriant reikšmę pagal salygą.
  */
  const currentAge = 18;
  const requiredAge = 20;
  const sex = 'male';
  { // Logika su standartiniu if
    let msg;
    if (currentAge >= requiredAge) {
      if (sex === 'male')  msg = 'Sveikas jaunuoli, atvykęs į Super duper klubą';
      else msg = 'Sveika jaunuole, atvykusi į Super duper klubą';
    } else {
      if (sex === 'male') msg = 'Nepyk jaunuoli, bet sūrelių fabrikas kitoje pusėje';
      else msg = 'Nepyk jaunuole, bet sūrelių fabrikas kitoje pusėje';
    }
    const message = msg;
    console.log(message);
  }
  // salyga ? jeigu true : jeigu false;   
  { // Logika su ternary
    const message = currentAge >= requiredAge // If(currentAge >= requiredAge)
      ? sex === 'male' // If(sex === 'male')
        ? 'Sveikas jaunuoli, atvykęs į Super duper klubą' // then if true
        : 'Sveika jaunuole, atvykusi į Super duper klubą' // then if false
      : sex === 'male' // If(sex === 'male')
        ? 'Nepyk jaunuoli, bet sūrelių fabrikas kitoje pusėje' // then if true
        : 'Nepyk jaunuole, bet sūrelių fabrikas kitoje pusėje'; // then if false
    console.log(message);
  }
}
console.groupEnd();
console.log('-------------------------\n');
