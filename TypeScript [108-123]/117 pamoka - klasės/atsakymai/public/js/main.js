"use strict";
var HeightUnit;
(function (HeightUnit) {
    HeightUnit["CM"] = "cm";
    HeightUnit["M"] = "m";
    HeightUnit["IN"] = "in";
})(HeightUnit || (HeightUnit = {}));
;
class Person {
    constructor({ name, surname, age, height, heightUnits }) {
        this.name = name;
        this.surname = surname;
        this.setAge(age);
        this.setHeight(height, heightUnits);
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setAge(age) {
        if (age < 1 || age > 150) {
            console.error(`age value '${age}' for method Person.setAge in incorrect.\n\t Value must be in range [1; 150].`);
            return;
        }
        if (age % 1 !== 0) {
            console.error(`age value '${age}' for method Person.setAge in incorrect.\n\t Value must be an integer.`);
            return;
        }
        this.age = age;
    }
    setHeight(height, units) {
        switch (units) {
            case "cm":
                this.height = height;
                break;
            case "m":
                this.height = height * 100;
                break;
            case "in":
                this.height = height * 2.54;
                break;
            default: this.height = height;
        }
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        if (this.height === undefined)
            return this.height;
        switch (Person.heightUnits) {
            case HeightUnit.CM: return this.height;
            case HeightUnit.M: return this.height / 100;
            case HeightUnit.IN: return this.height / 2.54;
        }
    }
    getFullname() {
        return this.name + ' ' + this.surname;
    }
}
Person.heightUnits = HeightUnit.CM;
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const person = new Person({
        name: 'Serbentautas',
        surname: 'Bordiūras',
        age: 20,
        height: 180,
    });
    const newName = 'Bolvaris';
    const newSurname = 'Kepurė';
    console.log('Pradinis žmogaus pilnas vardas:\n\t', person.getFullname());
    console.log('Keičiamas vardas ir pavardė:', { newName, newSurname });
    person.setName(newName);
    person.setSurname(newSurname);
    console.log('Pakeistas žmogaus pilnas vardas:\n\t', person.getFullname());
}
console.groupEnd();
console.log('');
console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const personWrongAge = new Person({
        name: 'Severija',
        surname: 'Vampyrė',
        age: 2000,
        height: 180,
    });
    const person = new Person({
        name: 'Serbentautas',
        surname: 'Bordiūras',
        age: 20,
        height: 180,
    });
    console.log('Person with wrong age param:\n\t', personWrongAge);
    console.log('Person with correctly set age:\n\t', person);
    const wrongAge1 = -17;
    const wrongAge2 = 1200;
    const wrongAge3 = 15.1;
    const rightAge = 11;
    console.log('setting age:', wrongAge1);
    person.setAge(wrongAge1);
    console.log('person age:', person.getAge());
    console.log('setting age:', wrongAge2);
    person.setAge(wrongAge2);
    console.log('person age:', person.getAge());
    console.log('setting age:', wrongAge3);
    person.setAge(wrongAge3);
    console.log('person age:', person.getAge());
    console.log('setting age:', rightAge);
    person.setAge(rightAge);
    console.log('person age:', person.getAge());
}
console.groupEnd();
console.log('');
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const personProps1 = {
        name: 'Serbentautas',
        surname: 'Bordiūras',
        age: 20,
        height: 180,
    };
    const personProps2 = {
        name: 'Amerikas',
        surname: 'Magelanas',
        age: 20,
        height: 70,
        heightUnits: 'in',
    };
    const personProps3 = {
        name: 'Amerikas',
        surname: 'Magelanas',
        age: 20,
        height: 1.75,
        heightUnits: 'm',
    };
    const person1 = new Person(personProps1);
    const person2 = new Person(personProps2);
    const person3 = new Person(personProps3);
    console.log('Sukurtas Person objektas be nurodytų matavimo vienetų:', '\n\tprops:', personProps1, '\n\tperson:', person1);
    console.log('Sukurtas Person su ūgio matavimo vienetais - coliais:', '\n\tprops:', personProps2, '\n\tperson:', person2);
    console.log('Sukurtas Person su ūgio matavimo vienetais - metrais', '\n\tprops:', personProps3, '\n\tperson:', person3);
    console.log('\n---\n');
    const newHeightProps1 = [1.55, 'm'];
    const newHeightProps2 = [65, 'in'];
    const newHeightProps3 = [165, 'cm'];
    console.log('Keisime šio žmogaus ūgį:', person1);
    console.log('Nustatomas ūgis:', newHeightProps1);
    person1.setHeight(...newHeightProps1);
    console.log('Žmogaus ūgis centimetrais:', person1.getHeight());
    console.log('Nustatomas ūgis:', newHeightProps2);
    person1.setHeight(...newHeightProps2);
    console.log('Žmogaus ūgis centimetrais:', person1.getHeight());
    console.log('Nustatomas ūgis:', newHeightProps3);
    person1.setHeight(...newHeightProps3);
    console.log('Žmogaus ūgis centimetrais:', person1.getHeight());
}
console.groupEnd();
console.log('');
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    console.log('Person klasės statinės savybės:');
    console.dir(Object.assign({}, Person));
    console.log('Keičiami matavimo vienetai į:', HeightUnit.IN);
    Person.heightUnits = HeightUnit.IN;
    console.log('Person klasės statinės savybės:');
    console.dir(Object.assign({}, Person));
    console.log('Keičiami matavimo vienetai į:', HeightUnit.M);
    Person.heightUnits = HeightUnit.M;
    console.log('Person klasės statinės savybės:');
    console.dir(Object.assign({}, Person));
}
console.groupEnd();
console.log('');
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
{
}
console.groupEnd();
console.log('');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    const person = new Person({
        name: 'Serbentautas',
        surname: 'Bordiūras',
        age: 20,
        height: 180,
    });
    console.log('Sukurtas objektas:', person);
    console.log('\n--\n');
    Person.heightUnits = HeightUnit.CM;
    console.log('Person klasės ūgio matavimo vienetai:', Person.heightUnits);
    console.log('žmogaus ūgis', person.getHeight());
    Person.heightUnits = HeightUnit.IN;
    console.log('Person klasės ūgio matavimo vienetai:', Person.heightUnits);
    console.log('žmogaus ūgis', person.getHeight());
    Person.heightUnits = HeightUnit.M;
    console.log('Person klasės ūgio matavimo vienetai:', Person.heightUnits);
    console.log('žmogaus ūgis', person.getHeight());
}
console.groupEnd();
console.log('');
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
}
console.groupEnd();
console.log('');
console.log('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
//# sourceMappingURL=main.js.map