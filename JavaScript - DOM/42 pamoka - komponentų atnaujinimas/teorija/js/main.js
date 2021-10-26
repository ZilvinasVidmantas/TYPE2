const rootElement = document.querySelector('#root');

const formatedUserDataForTableComponent = userDataArr.reduce((result, { imgSrc, email, role }) => {
  result.push([imgSrc, email, role]);
  return result;
}, []);

const tableComponent = new TableComponent({
  colNames: ['Nuotrauka', 'El. paštas', 'Rolė'],
  data: formatedUserDataForTableComponent
});

rootElement.appendChild(tableComponent.htmlElement);