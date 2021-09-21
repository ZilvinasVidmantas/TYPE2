// Masyvas tai duomenų kolekcija panašaus tipo reikšmėms laikyti.
// Masyvo elementai yra numeruojami nuo 0, pvz.:
const numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:     0   1  2   3  4  5  6  7  8  9
const nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
// indeksai:    0          1         2        3       4        5      6    
const helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
// indeksai:      0       1     2      3     4    5     6     7  

// ---- ---- ---- MASYVO REIKŠMIŲ NAUDOJIMAS
// Masyvo reikšmės yra pasiekiamas naudojant atitinkamą indeksą:
console.log(numbers[3]); // 78
console.log(nouns[2]); // hammer
console.log(helpers[0]); // in

// Masyvo reikšmes galime nustatyti tokiu būdu:
nouns[2] = 'saw'; // reikšmė 'hammer' pasikeitė į 'saw'
numbers[3] += 6; // Prie esamos reikšmės indeksu 3 pridedama dar 6. 78 + 6 = 84;

// !!! Rašant SUDĖTINGUS algoritmus, masyvo indeksai gali būti skaičiuojami !!!
// Pvz.:
// arr.length - masyve esančių elementų skaičius 
//  Jeigu masyve yra 6 elementai, o elementai yra numeruojami nuo 0, 
// tuomet paskutinio elemento indeksas visada bus vienu mažesnis nei masyvo elementų skaičius. Iš to seka, kad:
numbers[numbers.length - 2]; // Prieš paskutinis masyvo elementas:
numbers[Math.floor((numbers.length) / 2)] // Vidurinis masyvo elementas elementas

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
const sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                       
// 2. hammer is on the table
nouns.push('hammer');
const sentence2 = nouns[7] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
// 3. sun is in the sky
const sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
// 4. apple is with my sister
const sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[3] + helpers[7] + nouns[1];

console.log({
  sentence1,
  sentence2,
  sentence3,
  sentence4
});
