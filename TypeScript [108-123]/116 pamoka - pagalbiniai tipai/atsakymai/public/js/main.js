"use strict";
console.group('1. Sukurkite funkciją, kuri atnaujina Image src savybę');
{
    const solution = (image, src) => (Object.assign(Object.assign({}, image), { src }));
    const img = {
        id: '65465465',
        src: 'https://unsplash.it/200/200'
    };
    const src = 'https://unsplash.it/400/400';
    const newImg = solution(img, src);
    console.log('Prieš', img);
    console.log({ src });
    console.log('Po', newImg);
}
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri atnaujina visas Category savybes išskyrus id');
{
    const solution = (category, categoryProps) => {
        Object.assign(category, categoryProps);
    };
    const cat1 = {
        id: '1',
        title: 'Vyrams',
        parentCategory: null,
    };
    const cat11 = {
        id: '1-1',
        title: 'Batai',
        parentCategory: null,
    };
    const cat12 = {
        id: '1-2',
        title: 'category X',
        parentCategory: null,
    };
    const cat111 = {
        id: '1-1-1',
        title: 'category Y',
        parentCategory: null,
    };
    const categories = [cat1, cat11, cat12, cat111];
    console.table(JSON.parse(JSON.stringify(categories)));
    solution(cat11, { title: 'Avalynė', parentCategory: cat1 });
    solution(cat12, { title: 'Kelnės', parentCategory: cat1 });
    solution(cat111, { title: 'Sportbačiai', parentCategory: cat11 });
    console.table(categories);
}
console.groupEnd();
console.group('3. Sukurkite funkciją, kuri atnaujina perduotas Category savybes išskyrus id');
{
}
console.groupEnd();
console.group('4. Sukurkite funkciją, kuri atnaujina visas Item savybes išskyrus id');
{
}
console.groupEnd();
console.group('5. Sukurkite funkciją, kuri atnaujina perduotas Item savybes išskyrus id');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map