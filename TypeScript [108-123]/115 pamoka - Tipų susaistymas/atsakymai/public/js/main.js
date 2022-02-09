"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        married: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const selectTaskProps = ({ name, surname, sex }) => ({
        name, surname, sex
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.table(people);
    console.table(males);
}
console.groupEnd();
console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
    const isFemale = ({ sex }) => sex === 'female';
    const females = people.filter(isFemale);
    console.table(people);
    console.table(females);
}
console.groupEnd();
console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
    const personHasCar = ({ hasCar }) => Boolean(hasCar);
    const createIdentity = ({ name, surname }) => ({ name, surname });
    const identityReducer = (result, { hasCar, name, surname }) => {
        if (hasCar)
            result.push({ name, surname });
        return result;
    };
    const peopleWithCars = people.filter(personHasCar);
    const indentities = peopleWithCars.map(createIdentity);
    const identitiess2 = people.reduce(identityReducer, []);
    console.table(people);
    console.table(indentities);
    console.table(identitiess2);
}
console.groupEnd();
console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
}
console.groupEnd();
console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
}
console.groupEnd();
console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
}
console.groupEnd();
console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map