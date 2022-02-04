"use strict";
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
console.group('1. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function solution(arr) {
        return arr.map((x) => x < 0 ? x * -1 : x);
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų suapvalintų iki sveikų skaičių');
{
    function solution(arr) {
        return arr.map((x) => x - (x % 1));
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('3. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo natūralių skaičių');
{
    function solution(arr) {
        return arr.filter((x) => x > 0 && x - (x % 1) === x);
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('4. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo kas antro elemento pradedant pirmu');
{
    function solution(arr) {
        const result = [];
        for (let i = 0; i < arr.length; i += 2) {
            result.push(arr[i]);
        }
        return result;
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('5. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo kas penkto elemento pradedant trečiu');
{
    function solution(arr) {
        const result = [];
        for (let i = 2; i < arr.length; i += 5) {
            result.push(arr[i]);
        }
        return result;
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina visų elementų sumą');
{
    function solution(arr) {
        return arr.reduce((sum, num) => sum + num);
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('7. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina visų elementų aritmetinį vidurkį');
{
    function solution(arr) {
        return arr.reduce((sum, num) => sum + num / arr.length, 0);
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('8. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausią skaičių masyve.');
{
    function solution(arr) {
        return Math.max(...arr);
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('9. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią skaičių masyve.');
{
    function solution(arr) {
        return Math.min(...arr);
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('10. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina masyvą, kurio pirmas elementas yra mažiausia pradinio masyvo reikšmė, o antras grąžinamo masyvo elementas yra didiausia reikšmė pradiniame masyve.');
{
    function solution(arr) {
        const sortedArr = [...arr].sort((a, b) => a - b);
        return [sortedArr[0], sortedArr[sortedArr.length - 1]];
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('11. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina objektą, kurio savybė "min" yra mažiausia pradinio masyvo reikšmė, o savybė "max" yra didiausia reikšmė pradiniame masyve.');
{
    function solution(arr) {
        const sortedArr = [...arr].sort((a, b) => a - b);
        return {
            min: sortedArr[0],
            max: sortedArr[sortedArr.length - 1],
        };
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('12 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    const genTitleObject = {
        '-3': { m: 'great grandfather', f: 'great grandmother' },
        '-2': { m: 'grandfather', f: 'grandmother' },
        '-1': { m: 'father', f: 'mother' },
        0: { m: 'me!', f: 'me!' },
        1: { m: 'son', f: 'daughter' },
        2: { m: 'grandson', f: 'granddaughter' },
        3: { m: 'great grandson', f: 'great granddaughter' },
    };
    const solution = (g, s) => genTitleObject[g][s];
    const sexes = ['m', 'f'];
    const generations = [-3, -2, -1, 0, 1, 2, 3];
    sexes.forEach(sex => {
        generations.forEach(gen => {
            console.log({ sex, gen }, '->', solution(gen, sex));
        });
    });
}
console.groupEnd();
console.group('13 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    const solution = (cards) => {
        return cards.reduce((sum, { score }) => sum + score, 0);
    };
    const cards1 = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ];
    const cards2 = [
        { tile: "B", score: 2 },
        { tile: "V", score: 4 },
        { tile: "F", score: 4 },
        { tile: "U", score: 1 },
        { tile: "D", score: 2 },
        { tile: "O", score: 1 },
        { tile: "U", score: 1 }
    ];
    console.log(cards1, '->', solution(cards1));
    console.log(cards2, '->', solution(cards2));
}
console.groupEnd();
console.group('14 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    const solution = (items, limit) => {
        return Object.values(items).reduce((sum, price) => sum + price) - limit;
    };
    const items1 = { "baseball bat": 20 };
    const limit1 = 5;
    const items2 = { skate: 10, painting: 20 };
    const limit2 = 19;
    const items3 = { skate: 200, painting: 200, shoes: 1 };
    const limit3 = 400;
    console.log({ items1, limit1 }, '->', solution(items1, limit1));
    console.log({ items2, limit2 }, '->', solution(items2, limit2));
    console.log({ items3, limit3 }, '->', solution(items3, limit3));
}
console.groupEnd();
console.group('15 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    const solution = (object) => {
        return Object.entries(object);
    };
    const obj1 = { a: 1, b: 2 };
    const obj2 = { name: 'Sasaris', surname: 'Kova' };
    const obj3 = { name: 'Bekas', age: 12, sick: false };
    const res1 = solution(obj1);
    const res2 = solution(obj2);
    const res3 = solution(obj3);
    console.log(obj1, '->', res1);
    console.log(obj2, '->', res2);
    console.log(obj3, '->', res3);
}
console.groupEnd();
//# sourceMappingURL=main.js.map