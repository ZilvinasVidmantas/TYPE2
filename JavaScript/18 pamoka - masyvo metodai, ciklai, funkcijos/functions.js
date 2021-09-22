// Funkcija tai perpanaudojas kodo blokas. Ją galima naudoti daug kartų.
// Pirmiausia turime aprašyti funkciją. Funkcijos aprašas susideda iš šių dalių:
//  - funkcijos pavadinimas -> naudojamas tam, kad ją iškviesti. Taip pat funkcijos pavadinimas turėtų sufleruoti jos veikimą.
//  - parametrų sąrašas -> tai priimamų kintamųjų sąrašas, kuriuos galime pasivadinti kaip tik norime, jie taip pat turėtų sufleruoti savo paskirtį.
//  - vykdymo blokas -> tai perpanaudojama kodo dalis, kuri įvyks kiekvieną kartą, kuomet bus iškviečiama funkcija
//  - funkcijos grąžinimas -> tai reikšmės grąžinimas į funkcijos iškvietimo vietą. Tai įvykdoma panaudojant direktyvą 'return';
// Aprašius funkciją galime ją iškviesti, parašius funkcijos pavadinimą ir šalia jos paprastus skliaustelius. Jeigu reikia, skliausteliuose galime
// perduoti kintamuosius, kurie vadinami argumentais.
// Funkcijos kvietinys/iškvietimas gali (bet ne visada) grąžinti reikšmę, kuri bus įrašyta/grąžinta į funkcijos iškvietimo vietą. 

// Funkcijos aprašas ( function declaration)
//             ↓ - funkcijos pavadinimas, kuris naudojamas jos kodui iškviesti
function nueitasKelias(greitis, laikas) // → funkcijos antraštė ( function header)
//                         ↑       ↑    - tarp skliaustų parašyti įeinamieji kintamieji vadinami PARAMETRAIS
{ // → → → → → → → → → → → → Perpanaudojamo kodo bloko pradžia/atidarymas  → → → → → → → → → → → → → → → → 
  return greitis * laikas; //                                                                             ← Funkcijos kūnas (function body)
  // ↑ - direktyva 'return' grąžina po return žodžio aprašytą išraišką į funkcijos IŠKVIETIMO VIETĄ       ← vykdymo blokas. (function implementation)
} // → → → → → → → → → → → → Perpanaudojamo kodo bloko pabaiga/uždarymas   → → → → → → → → → → → → → → → → 

//                 ↓  funkcijos iškvietimas (function invocation/ function call)
const kelias1 = nueitasKelias(5, 20); // kelias1 kintamojo reikšmė bus tokia, kokią GRĄŽINS funkcijos kvietinys "nueitasKelias(5, 20)".
//                            ↑  ↑ - kintamieji kurie perduodami funkcijai vadinami argumentais.
console.log(kelias1);
console.log(nueitasKelias(7, 10));
const kelionėsObjektas = {
  pavadinias: 'Kelionė į parduotuvę',
  atstumas: nueitasKelias(3, 5) + nueitasKelias(1, 5) + nueitasKelias(3, 5)
}
console.log(kelionėsObjektas)

function kvadratoPlotas(krastine) {
  return krastine ** 2;
}

function staciakampioPlotas(aukstis, plotis) {
  return aukstis * plotis;
}

function lygiagretainioPlotas(a, b, angleAB) {
  return a * b * Math.sin(angleAB * Math.PI / 180);
}

function trikampioPlotas(krastine1, krastine2, kampasTarpJu) {
  return lygiagretainioPlotas(krastine1, krastine2, kampasTarpJu) / 2;
}

function ciclreArea(r) {
  return Math.PI * r ** 2;
}

function ciclrePerimeter(r) {
  return 2 * Math.PI * r;
}

console.log('staciakampioPlotas(7, 10) →', staciakampioPlotas(7, 10));
console.log('kvadratoPlotas(6) →', kvadratoPlotas(6));
console.log('lygiagretainioPlotas(3, 3, 60)', lygiagretainioPlotas(3, 3, 60));
console.log('trikampioPlotas(8, 7, 65) →', trikampioPlotas(8, 7, 65));
console.log('2 * staciakampioPlotas(5, 8) - kvadratoPlotas(2) →', 2 * staciakampioPlotas(5, 8) - kvadratoPlotas(2));
console.log('6 * trikampioPlotas(3, 3, 60) →', 6 * trikampioPlotas(3, 3, 60));
console.log('staciakampioPlotas(6, 12) →', staciakampioPlotas(6, 12));
console.log({
  'ciclreArea(3)': ciclreArea(3),
  'ciclrePerimeter(3)': ciclrePerimeter(3),
});

console.log({
  'ciclreArea(6)': ciclreArea(6),
  'ciclrePerimeter(6)': ciclrePerimeter(6)
});

// Tęsiame 11:30