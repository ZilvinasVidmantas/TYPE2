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
        arr.sort((a, b) => a - b);
        return [arr[0], arr[arr.length - 1]];
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('11. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina objektą, kurio savybė "min" yra mažiausia pradinio masyvo reikšmė, o savybė "max" yra didiausia reikšmė pradiniame masyve.');
{
    function solution(arr) {
        arr.sort((a, b) => a - b);
        return {
            min: arr[0],
            max: arr[arr.length - 1],
        };
    }
    const result = solution(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
//# sourceMappingURL=main.js.map