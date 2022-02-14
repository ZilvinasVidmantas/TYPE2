import WorkPerson from './WorkPerson.js';
import SelfEmployedPerson from './SelfEmployedPerson.js';
import BuisnessLicencePerson from './BuisnessLicencePerson.js';

console.group('0. WorkPerson klasės objektai');
{
  const backendDeveloper = new WorkPerson('25169845878', 'Apsas', 'Revestenis', 25, 1);
  const frontendDeveloper = new WorkPerson('25169145878', 'Klikas', 'Eventauskas', 25, 0.5);

  console.log(backendDeveloper);
  console.log(frontendDeveloper);
}
console.groupEnd();


console.group('1. Sukurkite darbuotoją pagal individualią veiklą - užmokestis už kiekvieną valandą, kuris būtų Žmogus.');
{
  const selfEmployed1 = new SelfEmployedPerson('25169845878', 'Beribė', 'Jūračka', 25, 10);
  const selfEmployed2 = new SelfEmployedPerson('25169145878', 'Fanalijus', 'Analijus', 10);

  console.log(selfEmployed1);
  console.log(selfEmployed2);

}
console.groupEnd();

console.group('2. Sukurkite darbuotoją pagal Verslo liudijimą - sutartitnis užmokestis už atliktą darbą, kuris būtų Žmogus.');
{
  const designer = new BuisnessLicencePerson('15169845878', 'Plunksytė', 'Krupštytė');
  const marketingSpecialist = new BuisnessLicencePerson('15169845878', 'Protenis', 'Knistauskenis', [
    { id: 'job1', title: 'Facebook adds', pay: 200 },
    { id: 'job2', title: 'Google adds', pay: 700, finished: true, dateFinished: new Date(2022, 2, 14) },
  ]);

  console.log(designer);
  console.log(marketingSpecialist);
}
console.groupEnd();


// 3. Iškelkite klases į atskirus failus
// 4. Sukurkite tipą PersonProps - objektą, ir pakeiskite klasių konstruktorius pritaikydami šį tipą
// 5. 1, 2 uždavinių pavyzdinius darbuotojus įdėkite į viešai aprašytą masyvą

// pertrauka iki 10:30
// Užduotys atliekamos 20min. iki 10:50