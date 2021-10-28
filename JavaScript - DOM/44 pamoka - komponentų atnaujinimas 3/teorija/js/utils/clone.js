/*
  1. primityvius
  2. objektus
  3. masyvus
  4. funkcijas
  
  5. kompleksinius kintamuosius
*/

const clone = (original) => {
  // Nesugadinant primityvių reikšmių klonavimo logikos, įgalinti objekto klonavimo logiką.
  return original;
}

const errors = [];

{
  const a = 7;
  const b = clone(a);
  if (a !== b) errors.push('Blogai veikia Number kopijavimas');
}

{
  const a = 'banys';
  const b = clone(a);
  if (a !== b) errors.push('Blogai veikia String kopijavimas');
}

{
  const a = {};
  const b = clone(a);
  // Sėkimngų objektų klonavimo atveju, objektai turi turėti visas tas pačias savybes,
  // bet rodyti į skirtingas atminties vietas

  const samePropertyCount = Object.keys(a).length = Object.keys(b).length;
  const differentRefereces = a !== b;
  let identicalProperties = true;
  for (const propName in a) {
    if (Object.hasOwnProperty.call(b, propName)) {
      if (a[propName] !== b[propName]) {
        identicalProperties = false;
        break;
      }
    } else {
      identicalProperties = false;
      break;
    }
  }
  if (!(samePropertyCount && differentRefereces && identicalProperties)) errors.push('Blogai veikia Objekto kopijavimas');
}

if (errors.length > 0) console.error('Klaida <clone> metodo implementacijoje\n', errors.join('\n'))
else console.log('funkcija <clone> implementuota sėkmingai');
