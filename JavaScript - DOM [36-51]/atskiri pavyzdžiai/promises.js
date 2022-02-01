/*
Promise (pažadas) - tai yra prototipas, kuris vykdo parametru perduotą funkciją asinchroniškai. 
  sinchroniškai vykdomas kodas - vienas darbas po kito iš eilės. Sekantis nėra vykdomas kol neįsivykdė pirmasis.
  asinchroniškai vykdomas kodas - darbai vykdomi ne iš eilės. Kodas vykdomas tuomet, kuomet yra galimybė jį vykdyti.
    Asinchroniškas kodo vykdymas yra naudingas, kuomet pabaigti funkcijai reikia sulaukti duomenų, pvz.:
      - failo nuskaitymas
      - dirbtinis uždelsimas
      - užklausa į kitą serverį
      - bet kokia ilga operacija kuri pasiglemžia resursus ir dėl to nukenčia kitų darbų vykdymas.
  Promise'o būsenos gali būti 3:
    * pending - promise'o funkcija dar nedavė jokio atsakymo
    * fulfilled - promise'o funkcija davė teigiamą atsakymą, arba buvo suvaldytas neigiamas atsakymas catch bloke
    * rejected - promiso'o funkcija davė neigiamą atsakymą, ir jis nebuvo suvaldytas catch bloke
  
  then bloke įsivykdo kodas, kuomet promise'o bloke buvo iškviesta 'resolve' funkcija
  catch bloke įsivykdo kodas, kuomet promise'o bloke buvo iškviesta 'reject' funkcija
  
*/
//                                           resolve ↘            ↙ reject
// const tėtisGrįšIšParduotuvės = new Promise(function (resolve, reject) {
//   console.log('Tėvėlis išėjo į parduotuvę...');
//   setTimeout(() => {
//     // 1. tėvelis gįžta su mandarinais
//     resolve(['Svietas', 'Mandarinai']);
//     // 2. tėvelius pasiklydo
//     reject('Tėvelis atsiprašo');
//   }, 5000)
// })
//   .then((data) => {
//     console.log('Tėvelis grįžo, ir atnešė:', data);
//   })
//   .catch(function (err) {
//     console.error('Tėvelis negrįžo, klaida:', err);
//   })
//   .finally(() => {
//     console.log('Pažado būsena:', tėtisGrįšIšParduotuvės);
//   });

// console.log('Kodas vykdomas po Promise');
// console.log('Pažado būsena:', tėtisGrįšIšParduotuvės);

// ------------------------------------------ Async ---------------------------------------------------------
// Asinchroninė funkcija, tai funkcija kurios viduje galite sulaukti kitų Promise'7 naudodami raktažodį await
// Asichroninė funkcija VISADA grąžina Promise.
// const sumAsync = async (a, b) => {
//     return a + b;
// }

// console.log({
//   sumAsync,
//   'sumAsync(3, 5)': sumAsync(3, 5)
// })

// --------------------------------------------------------------------------------------------------------

const dataUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const printError = (err) => console.error(err);

const createHeader = ({title}) => {
  console.log('Sukursiu HTML elementą, su title:', title);
};

fetch(dataUrl)
  .then(response => response.json())
  .then(createHeader)
  .catch(printError);

// Imediatly invoked Function expression - IIFE
// (async () => {
//   try {
//     const response = await fetch(dataUrl);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     printError(err);
//   }
// })()
