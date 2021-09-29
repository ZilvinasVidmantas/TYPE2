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
  
  then bloke įsivykdo kodas, kuomet promise'o bloke buvo įvykdyta 'resolve' funkcija
  catch bloke įsivykdo kodas, kuomet promise'o bloke buvo įvykdyta 'reject' funkcija
  
*/

//                                           resolve ↘                   ↙ reject
const mamaGrįžtaIšDarbo = new Promise(function (kąVykdytJeiGerai, kąVykdytJeiBlogai) {
  console.log('Daromi namų darbai...');
  setTimeout(() => {
    console.log('GRĮŽO MAMA')
    const result = Math.floor(Math.random() * 10);
    if (result <= 5)
      kąVykdytJeiGerai({
        msg: 'Įsivykdė gerai',
        data: 'Eime pasivaikščiot'
      });
    else
      kąVykdytJeiBlogai({
        msg: 'Įsivykdė blogai',
        data: 'Bėgi greit ir padarai namų darbus'
      });
  }, 2000);
})
  .then(function (data) {
    // console.log('Promise\'as yra fulfilled');
    return new Promise(res => {
      console.log(data.msg + '...')
      setTimeout(() => {
        res('O dabar einame, paskaitysiu tau knygą');
      }, 5000)
    })
  })
  .then(data => new Promise(res => {
    console.log(data);
    setTimeout(() => {
      res('O dabar einame miegoti');
    }, 3000)
  }))
  .then(data => console.log(data))
  .catch(function (data) {
    console.log('Promise\'as yra rejected');
    console.error(data);
  });

console.log(mamaGrįžtaIšDarbo);