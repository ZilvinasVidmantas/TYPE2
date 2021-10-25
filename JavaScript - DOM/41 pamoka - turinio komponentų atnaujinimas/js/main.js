const rootElement = document.querySelector('#root');

const formatedUserData = userDataArr.reduce((result, userData) =>{

  result.push('Aš esu vienos eilutės duomenys');
  return result;
}, []);
console.log(formatedUserData);


const tableComponent = new TableComponent({
  colNames: ['Nuotrauka', 'El. paštas', 'Rolė'],
  // data: [
  //   ['nuotrauka1', 'elementas1', 'rolė1'],
  //   ['nuotrauka2', 'elementas2', 'rolė2'],
  //   ['nuotrauka3', 'elementas3', 'rolė3'],
  //   ['nuotrauka4', 'elementas4', 'rolė4'],
  //   ['nuotrauka5', 'elementas5', 'rolė5'],
  // ],
  data: formatedUserData
});

rootElement.appendChild(tableComponent.htmlElement);