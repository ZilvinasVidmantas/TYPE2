'use strict';

const automobilis = {
  // marke - raktas, 'Opel' - reikšmė
  marke: 'Opel',
  modelis: 'Astra',
  metai: 2005,
  spalva: 'Juoda',
  variklioTuris: 2.0,
  dauzta: true,
  kuroTipas: 'dyzelis',
};

// Savybių panaudojimas
console.log(automobilis.marke + ' ' + automobilis.modelis);
console.log(automobilis['marke'] + ' ' + automobilis['modelis']);

// Savybių kūrimas/perrašymas
automobilis.modelis = 'Vectra';
console.log(automobilis);
automobilis['spalva'] = 'Raudona';
console.log(automobilis);

// Primitive type vs Reference type
console.log('Kopijuojant primityvaus tipo kintamuosius, yra išskiriama nauja atminties vieta. Kintamieji rodo į atskiras atminties vietas.')
let a = 11;
let b = a;
a = 15;
console.log('a:', a, 'b:', b);

console.log('Kopijuojant nuorodos tipo kintamuosius, nauja atminties vieta NĖRA išskiriama, o vietoje to yra sukuriama nuoroda į tą pačią atminties vietą.');
let c = {
  num: 11
};
let d = c;
c.num = 15;
console.log('c.num:', c.num, 'd.num:', d.num);

// Nuorodos tipo kitamųjų reikšmių kopijavimas.
// Norint pakopijuoti nuorodps tipo kintamąjį taip, jog jis turėtų savo atskirą atminties vietą, naudoti šią metodologiją:
let e = JSON.parse(JSON.stringify(d));
d.num = 99;
e.num = -2;
console.log('d.num:', d.num, 'e.num:', e.num);

// Objekto savybių kūrimas trumpuoju būdu
// Sintaksės taisyklė: Jeigu kuriant objektą, nurodome savybę, neaprašę reikšmės,
// tuomet JS kompiliatorius ieško, toje aplinkoje esančio kintamojo, ir savybei,
// tuo pavadinimu įrašo reikšmę esančią kintamajame:

const
  title = 'wardrobe',
  weight = 50,
  height = 200,
  width = 280,
  depth = 80;

const wardrobe = {
  title,
  weight,
  height,
  width,
  depth
};

console.log(wardrobe);

// P.S.: Ši kompiliatoriaus elgsena labai patogi spausdinant kintamųjų reikšmes
// konsolėje. Vietoje to, kad spausdintume 'string'us kurie nurodo, kas toje
// eilutėje yra spausdinama, galima įvilkti norimas savybes į objekto skliaustus,
// ir tuomet kintamieji bus atspausdinti lyg objekto savybes, kur galėsime matyti
// jų reikšmes kartu su pavadinimais.
{
  // ... kodo fragmentas
  const a = 7;
  const b = '49687asd';
  const c = true;
  const d = {};
  const e = [7, 7, 7];
  // Kintamų peržiūra įvardinus ką spausdiname
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
  console.log('d:', d);
  console.log('e:', e);

  // Gudrus būdas pamatyti kokie kintamieji yra spausdinami
  console.log({ a, b, c, d, e });
}
