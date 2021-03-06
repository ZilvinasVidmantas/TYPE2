import WorkPerson from './WorkPerson.js';
import SelfEmployedPerson from './SelfEmployedPerson.js';
import BuisnessLicencePerson from './BuisnessLicencePerson.js';
const employees = [];
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
console.dir(employees[0].toString());
//# sourceMappingURL=main.js.map