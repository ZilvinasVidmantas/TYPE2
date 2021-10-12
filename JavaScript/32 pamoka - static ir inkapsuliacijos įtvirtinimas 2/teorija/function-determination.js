const petSounds = {
  dog: (name) => console.log(`${name} says: woof woof`),
  cat: (name) => console.log(`${name} says: myyyauuuww`),
  bird: (name) => console.log(`${name} says: Kelkis, lope, jau rytas`)
};

// 
const pets = [
  { type: 'dog', name: 'Brakey' }, // [0]
  { type: 'cat', name: 'Meuwy' }, //  [1]
  { type: 'bird', name: 'Ckvyky' } // [2]
]

const determinePetSoundFunction = (pet) => {
  // pet:               { type: 'dog', name: 'Brakey' }
  // pet.type:         'dog'
  // petSounds['dog']: (name) => 'woof woof'
  return petSounds[pet.type] // return (name) => 'woof woof'
}

determinePetSoundFunction(pets[0])(pets[0].name);
determinePetSoundFunction(pets[1])(pets[1].name);
determinePetSoundFunction(pets[2])(pets[2].name);

// iki 9:45 - pertrauka
// iki 10:10 - užduočių sprendimas

/*
  1. Sukurti naują gyvunėlio tipą (su atitinkama funkcija), ir sukurti atitinkamą gyvunėlį masyve <pets>, jog matytūsi dinamiškas funkcijos parinkimas
  2. Pakeisti 21-24 iškvietimo pavyzdžius naudojant Array.prototype.forEach
  3. Padaryti, jog atitinkamos gyvūnėlių funkcijos, būtų iškviečiamos iškarto, vietoj to, jog būtų grąžinamos:
    3.1 pervadinti determinePetSoundFunction -> makePetSound
    3.2 makePetSound  funkcijos viduje vietoj grąžinimo kviesti surastą funkciją (pagal gyvunėlio tipą) 
*/