// Kintamasis
//  Paprastai - kintamasis tai saugykla, į kurią galite įdėti reikšmę
//  Pilnai -  kintantamasis tai yra programavimo veikimo (runtime) atmintyje išsaugota nuorodą į operatyviosios atminties(RAM) vietą.

// Kintamojo deklaravimas - tai pasakymas vykdomam JS procesui/programai, jog bus naudojama atminties vieta, pasiekiama kintamojo pavadinimu

// Tik deklarvimas
let a; // vieno kintamojo deklaravimas
console.log('a:', a); // spausdinimas

// Deklaravimas IR priskyrimas
let b; // deklaravimas
b = 9; // priskyrimas
console.log('b:', b); // spausdinimas

// Deklaravimas su priskyrimu
let c = 11; // deklaravimas ir priskyrimas
console.log('c:', c); // spausdinimas

// Kintamojo perrašymas(override) - antrą kartą deklaruoti NEREIKIA IR NEGALIMA
a = 22; // reikšmės priskyrimas jau esančiam kintamui
console.log('a:', a); // spausdinimas

// KONTSTANTOS
const d = 7; // deklaravimas, priskyrimas ir reikšmės pakeitimo uždraudimas
// d = 5465; KLAIDA
console.log('d:', d);



