//  By attribute id=""
const main = document.querySelector('#main');
//  By attribute class=""
const h1 = main.querySelector('.h1');
//  By tag name <p>
const mainParagraph = main.querySelector('#mainParagraph');
// Select many by criteria
const mainListItems = document.querySelectorAll('.js-mainListItem');

console.log(main);
console.log(h1);
console.log(mainParagraph);
console.log(mainListItems);