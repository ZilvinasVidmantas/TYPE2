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
        title: 'Avalynė',
        parentCategory: cat1,
    };
    const cat12 = {
        id: '1-2',
        title: 'Category X',
        parentCategory: cat1,
    };
    const cat111 = {
        id: '1-1-1',
        title: 'Sportbačiai',
        parentCategory: null,
    };
    const categories = [cat1, cat11, cat12, cat111];
    console.table(JSON.parse(JSON.stringify(categories)));
    solution(cat11, {});
    solution(cat12, { title: 'Kelnės' });
    solution(cat111, { parentCategory: cat11 });
    console.table(categories);
}
console.groupEnd();
console.group('4. Sukurkite funkciją, kuri atnaujina visas Item savybes išskyrus id');
{
    const solution = ({ id }, props) => (Object.assign({ id }, props));
    const item = {
        id: 'sdfsdf',
        title: 'asdasd',
        price: 1465465,
        categories: [],
        inStock: 12,
        mainImg: { id: 'asdasdsa', src: 'asdasdasd' },
        images: [],
    };
    const itemProps = {
        title: 'Updated',
        price: 111111111,
        categories: [],
        inStock: 111111111,
        mainImg: { id: '111111111', src: '1111111111111' },
        images: [],
    };
    const updatedItem = solution(item, itemProps);
    console.log('Prieš:');
    console.log(item);
    console.log('Po:');
    console.log(updatedItem);
}
console.groupEnd();
console.group('5. Sukurkite funkciją, kuri atnaujina perduotas Item savybes išskyrus id');
{
    const solution = (item, props) => (Object.assign(Object.assign({}, item), props));
    const item = {
        id: 'sdfsdf',
        title: 'asdasd',
        price: 1465465,
        categories: [],
        inStock: 12,
        mainImg: { id: 'asdasdsa', src: 'asdasdasd' },
        images: [],
    };
    const updatedItem1 = solution(item, { price: 100 });
    const updatedItem2 = solution(item, { inStock: 50 });
    const updatedItem3 = solution(item, {
        title: 'item3',
        images: [
            { id: '1', src: 'asdasdas' },
            { id: '2', src: 'zzzzzzzzzzzz' },
        ]
    });
    console.log('original item');
    console.log(item);
    console.log('updatedItem1:');
    console.log(updatedItem1);
    console.log('updatedItem2:');
    console.log(updatedItem2);
    console.log('updatedItem3:');
    console.log(updatedItem3);
}
console.groupEnd();
console.group('6. Sukurkite funkciją, kuri pašalina Item savybes "description" ir "images"');
{
}
console.groupEnd();
console.group('7. Naudodami bendrinius tipus sukurkite funkciją, kuri atnaujintų, bet kokį objektą naudojant to objekto dalinėmis savybėmis');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map