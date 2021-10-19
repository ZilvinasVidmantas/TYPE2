const root = document.querySelector('#root');

const section1 = new Section('Sekcijos Pavadinimas', [], []);
const section2 = new Section('Sekcijos Pavadinimas 2', [], []);

const p1 = new Paragraph('Pargafo tekstas 1', 'bg-dark text-white p-5');
const p2 = new Paragraph('Pargafo tekstas 2222', 'bg-light text-danger p-3');

root.appendChild(section1.htmlElement);
root.appendChild(section2.htmlElement);
root.append(p1.htmlElement, p2.htmlElement);