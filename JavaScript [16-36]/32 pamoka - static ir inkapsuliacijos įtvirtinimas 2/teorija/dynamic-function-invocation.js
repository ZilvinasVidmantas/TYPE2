const petSounds = {
  dog: name => console.log(`${name} sako: woof woof`),
  cat: name => console.log(`${name} sako: myyyauuuww`),
  bird: name => console.log(`${name} sako: Kelkis, lope, jau rytas`),
  horse: name => console.log(`${name} sako: Yga-ga brrr phu ant tave.`)
};

const pets = [
  { type: 'dog', name: 'Brakey' },
  { type: 'cat', name: 'Meuwy' },
  { type: 'bird', name: 'Ckvyky' },
  { type: 'horse', name: 'Greitis' }
];

const makePetSound = pet => petSounds[pet.type](pet.name);

pets.forEach(makePetSound);
