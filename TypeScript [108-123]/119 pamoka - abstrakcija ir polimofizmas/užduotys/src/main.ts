import WorkPerson from './WorkPerson.js';
import SelfEmployedPerson from './SelfEmployedPerson.js';
import BuisnessLicencePerson from './BuisnessLicencePerson.js';
import Employee from './Employee.js';

const employees: Employee[] = [];

console.group('0. WorkPerson klasės objektai');
{
  const backendDeveloper = new WorkPerson({
    id: '25169845878',
    name: 'Apsas',
    surname: 'Revestenis',
    hourPay: 25,
    fullTimeEquivalent: 1
  });
  const frontendDeveloper = new WorkPerson({
    id: '25167745878',
    name: 'Eventas',
    surname: 'Klikauskas',
    hourPay: 25,
    fullTimeEquivalent: 0.5
  });
  employees.push(backendDeveloper);
  employees.push(frontendDeveloper);

  console.log(backendDeveloper);
  console.log(frontendDeveloper);
}
console.groupEnd();


console.group('1. Sukurkite darbuotoją pagal individualią veiklą - užmokestis už kiekvieną valandą, kuris būtų Žmogus.');
{
  const selfEmployed1 = new SelfEmployedPerson({
    id: '25169845878',
    name: 'Beribė',
    surname: 'Jūračka',
    hourPay: 25,
    hoursWorked: 10
  });
  const selfEmployed2 = new SelfEmployedPerson({
    id: '25169145878',
    name: 'Fanalijus',
    surname: 'Analijus',
    hourPay: 10
  });

  employees.push(selfEmployed1);
  employees.push(selfEmployed2);

  console.log(selfEmployed1);
  console.log(selfEmployed2);

}
console.groupEnd();

console.group('2. Sukurkite darbuotoją pagal Verslo liudijimą - sutartitnis užmokestis už atliktą darbą, kuris būtų Žmogus.');
{
  const designer = new BuisnessLicencePerson({
    id: '15169845878',
    name: 'Plunksytė',
    surname: 'Krupštytė',
  });
  const marketingSpecialist = new BuisnessLicencePerson({
    id: '15169845878',
    name: 'Protenis',
    surname: 'Knistauskenis',
    jobs: [
      { id: 'job1', title: 'Facebook adds', pay: 200 },
      { id: 'job2', title: 'Google adds', pay: 700, finished: true, dateFinished: new Date(2022, 2, 14) },
    ]
  });

  employees.push(designer);
  employees.push(marketingSpecialist);

  console.log(designer);
  console.log(marketingSpecialist);
}
console.groupEnd();

console.group('5.Atlyginimų skaičiavimai:');
{
  employees.forEach(x => {
    x.sayMyName();
    console.log(x.calcPay());
  });
}
console.groupEnd();

console.group('7. Darbuotojų toString metodai:');
{
  employees.forEach(emp => console.log(emp.toString()));
}
console.groupEnd();

/*
  3. Iškelkite klases į atskirus failus
  4. Sukurkite tipą PersonProps - objektą, ir pakeiskite klasių konstruktorius pritaikydami šį tipą
  5. Kiekvienai vaikinei klasei sukurkite metodą, kuris suskaičiuotų pinigus, kuriuso reikia pervesti darbuotojams:
    5.1 WorkPersonProps: Suskaičiuoti visas šio mėnesio darbo dienas, ir paskaičiuoti atlyginimą pagal etatą ir valandinį
    5.2 BuisnessLicencePersonProps: Praiteruoti per darbų masyvą, ir suskaičiuoti sumą visų ATLKIKTŲ darbų. Suskaičiavus sumą, 
      prieš grąžinant atsakymą, kiekvieno objektą (kuris buvo įskaičiuotas į sumą) ištrinti.
    5.3 SelfEmployedPersonProps: Sudauginti išdirbtų valandų skaičių su valandiniu įkainiu. 
  6. Sukurkite bendrą Employee abtrakčia klasę. Sukurkite masyvą visiems darbuotojams laikyti
    ir sudėkite visus kurtus darbuotojus į šį masyvą.
  7. Person klasę padarykite abstrakčią. Tuomet joje sukurkite metodą - toString(): string
    Šis metodas, turi pirmoje eilutė atspausdinti vardą pavardę ir asmens kodą, o likusias savybes
    atspausdinti reikia sekančiose eilutėse, atitrauktas nuo kairio krašto per \t simbolį, pvz.:
    Lempa Saulaitytė, 24155555555
      Jobs:
         id: 'asdas'
         title: 'Dabrbas 3000'
         pay: 2555
         finished: true/false
         payed: true
         dateFinished: 2022-01-13

         id: 'asdas'
         title: 'Dabrbas 3000'
         pay: 2555
         finished: true/false
         payed: true
         dateFinished: 2022-01-13
        
    Kiauras Debugnė, 39345786525
      hourPay: 20,
      fullTimeEquivalent: 1
  8. Įgalinkite toString metodo abstrakciją naudodami interface'us
*/

