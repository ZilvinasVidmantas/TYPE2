const rootElement = document.querySelector('#root');

const formatedUserDataForTableComponent = userDataArr.reduce((result, { imgSrc, email, role }) => {
  result.push([imgSrc, email, role]);
  return result;
}, []);
/* ES6  sintaksės sutrumpinimas
  const formatedUserData = userDataArr.reduce((result, { imgSrc, email, role }) => [
    ...result,
    [imgSrc, email, role]
  ], []);
*/

const tableComponent = new TableComponent({
  colNames: ['Nuotrauka', 'El. paštas', 'Rolė'],
  data: formatedUserDataForTableComponent
});

rootElement.appendChild(tableComponent.htmlElement);

// const container = document.createElement('div');

// container.innerHTML = '<button class="btn btn-success">Spausk Mane</button>';
// const button = container.querySelector('.btn-success');
// button.addEventListener('click', () => console.log('Aš dobilas žalias'))

// rootElement.appendChild(container);