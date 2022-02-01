const rootElement = document.querySelector('#root');
rootElement.style.textAlign = 'center';

const initValue = 8;
// Kintamasis kuris keisis programos eigoje
let value = initValue;

const resultContainer = document.createElement('div');
resultContainer.style.border = '1px solid black';
resultContainer.style.width = '200px';
resultContainer.style.height = '100px';
resultContainer.style.border = '1px solid black';
resultContainer.style.margin = '20px auto';
resultContainer.style.textAlign = 'center';
resultContainer.style.fontSize = '40px';
resultContainer.innerHTML = value;

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.innerHTML = 'Prideti';

const input = document.createElement('input');
input.type = 'number';
input.style.display = 'inline-block';
input.style.width = '80px';
input.className = 'form-control';

const increaseValue = (amount) => {
  value += amount;
  resultContainer.innerHTML = value;
}

{
/*
  Kuomet vykdoma įvykio sukelta funkcija, jai pirmus parametru yra perduodamas
  objektas su įvykio informacija.
  Kartais mums, jis yra aktualus ir to mes norime
*/
  // button.addEventListener('click', increaseValue );
}
{
  /*
  Tačiau, kartais, norime vykdyti funkciją su savo nurodytas parametrais
  tokiu atveju metodo <addEventListener> antru argumentu padeklaruojame
  funkciją, kuri iškvies mūsų norimą funkciją, su mūsų norimais argumentais
  */
  //                           norima funkcija ↘
  button.addEventListener('click', () => increaseValue(Number(input.value)) );
  //                                          norimi argumentai ↗
}

rootElement.appendChild(button);
rootElement.appendChild(input);
rootElement.appendChild(resultContainer);