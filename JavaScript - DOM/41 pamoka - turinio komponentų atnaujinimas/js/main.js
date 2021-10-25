const rootElement = document.querySelector('#root');



const formatedUserData = userDataArr.reduce((result, { imgSrc, email, role }) => {
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
  data: formatedUserData
});

rootElement.appendChild(tableComponent.htmlElement);