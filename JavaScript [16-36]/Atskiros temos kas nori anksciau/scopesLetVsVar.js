// Scope(aplinka) - tai vykdymo skliaustais apibrėžta kodo dalis

// Deklarauojant kintamuosius naudojant raktažodį 'let', aplinka
// yra bet kokie kintamojo deklaravimą apibrėžiantys skliaustai '{}'

{
  let a = 5;
}

if (true) {
  let a = 6;
}

function x() {
  let a = 7;
}

try {
  console.log(a); // Mes klaidą - nes window aplinkai nėra pasiekiamas kintamasis a;
} catch {
  console.error('Kintamasis a nera pasiekiamas sioje aplinkoje:', this);
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Deklarauojant kintamuosius naudojant raktažodį 'var', aplinka
// yra: function, prototype. 
// !!! Tačiau {...}, if, ir ciklai nėra traktuojama kaip aplinkos !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

{ // 'var' atžvilgiu tai NĖRA aplinka(scope)
  var a = 8;
}

if (true) // 'var' atžvilgiu tai NĖRA aplinka(scope)
{
  var b = 9;
}

function y() {// 'var' atžvilgiu tai YRA aplinka(scope)
  var c = 10;
}

try {
  console.log({ a, b });
  // console.log({a, b, c}); // Nepasiekiamas 'c' kintamasis, nes function sukuria aplinką
} catch (error) {
  console.error('Spausdinamas kintamasis/ieji nėra pasiekiami aplinkoje:', this);
}

// Praktikoje mes visada stengsimės naudoti let, nes tokiu atveju programuotojas yra įpareigotas
// suderinti kintamųjų pasiekiamumą, taip sumažinant klaidų riziką


// !!! const turi tokį patį pasiekiamumo tipą kaip ir 'let' !!!

// Norint priskirti 'let' tipo kintamuosius mažesnėje aplinkoje, bet naudoti didesnėje,
// reikia juos deklaruoti prieš mažesnę aplinką. Tokiu būdu, mažesnėje aplinkoje esantis priskyrimas
// naudos atminties vietą, kuri padeklaruota didesnėje aplinkoje pvz.:

let f = 88; // <- deklaravimas didesnėje aplinkoje
{ // ------- Priskyrimas mažesnėje aplinkoje
  f = 99;
}
console.log(f);

// Būtent tokiu būdų yra užtvirtinama, kad programuotojas supranta ką ir kodėl daro.

// Pavyzdinis darbo interviu klausimas:
// 1. Kaip reikia pataisyti kodą, jog įvykdytas kodas gražintų lyginių iterijų skaičių?

// for (let i = 0; i < 5; i++) {
//   let g = 0;
//   if (i % 2 === 0) {
//     g++;
//   }
// }
// ATS:
// let g = 0;
// for (let i = 0; i < 5; i++) {
//   if (i % 2 === 0 && i !== 0) {
//     g++
//   }
// }
// console.log(g);

// 2. Kaip reikėtų pakeisti kodą, jog būtų galima suskaičiuoti įvykūsių iteracijų skaičių?
for (let i = 0;  Math.floor(Math.random() * 10) > 3 ; i++) {
  // ...  
}
// ATS nr. 1: 
//   ↓↓↓
for (var i = 0;  Math.floor(Math.random() * 10) > 3 ; i++) {
  // ...  
}
// ATS nr. 2: 
let i;
for (i = 0;  Math.floor(Math.random() * 10) > 3 ; i++) {
  // ...  
}
console.log(i);