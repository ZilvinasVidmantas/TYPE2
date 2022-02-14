import WorkPerson from './WorkPerson.js';
import SelfEmployedPerson from './SelfEmployedPerson.js';
import BuisnessLicencePerson from './BuisnessLicencePerson.js';
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
//# sourceMappingURL=main.js.map