const rootElement = document.querySelector('#root');

const divContainer = document.createElement('div');
divContainer.style.border = '2px solid red';
divContainer.style.width = '600px';
divContainer.style.height = '600px';
rootElement.append(divContainer);

// btn, kintamasis kuris rodo į HTMLElement objektą
const btn = document.createElement('button');
btn.innerHTML = 'Spausk mane';
btn.addEventListener('click', () => alert('baniukas'))
divContainer.append(btn);

// Papildant tėvinio konteinerio logiką <string> pavidalu
// visas viduje esamas turinys paverčiamas string'u.
// To pasekoje visi viduje buvę elementai yra perkuriami iš naujo
// ir prarandamos nuorodos.
// To pasekoje nebeveikia mygtuko klausiklis
{
  // BLOGAI
  divContainer.innerHTML += '<p>Aš esu lopas, ir nevertinu kitų darbo</p>';
}
{
  // GERAI
  // Norint, jog nebūtų prarandamos nuorodos prijungiant elementus
  // reikia juos prijungti naudojant metodą <appendChild>
  
  // const p = document.createElement('p');
  // p.innerHTML = 'Aš ne debilas';
  // divContainer.appendChild(p);
}

console.log(btn);