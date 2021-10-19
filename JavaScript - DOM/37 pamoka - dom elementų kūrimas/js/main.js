const root = document.querySelector('#root');

const section1 = new Section('Sekcijos Pavadinimas', [], []);
const section2 = new Section('Sekcijos Pavadinimas 2', [], []);

root.appendChild(section1.htmlElement);
root.appendChild(section2.htmlElement);