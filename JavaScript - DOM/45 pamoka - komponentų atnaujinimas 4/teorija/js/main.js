const rootElement = document.querySelector('#root');

const userForm = new FormComponent({
  title: 'Pridėti vartotoją',
  fields: [
    { name: 'role', type: 'text', title: 'Rolė' },
    { name: 'email', type: 'email', title: 'El. Paštas' },
    { name: 'imgSrc', type: 'text', title: 'Nuotraukos nuoroda' },
  ],
  onSubmit: data => console.log('as esu isoreje', data)
});
const formatedUserDataForTableComponent = userDataArr.reduce((result, { id, imgSrc, email, role }) => {
  result.push({
    id,
    rowData: [`<img class="table__img "src="${imgSrc}" />`, email, role]
  });
  return result;
}, []);

const userTableComponent = new TableComponent({
  colNames: ['Nuotrauka', 'El. paštas', 'Rolė'],
  data: formatedUserDataForTableComponent
});


/*
  1. Sukurti UserManagerComponent, kuris atvaizduotų letelę ir formą viens šalia kito

    [9:55]
    1.4 initialize metode sukurti 2 komponento savybes:
      this.table = lentelės komponeneto objektas: 
        su duomenimis, tokiais pat, kaip main.js faile:
      this.form = formos komponeneto objektas 
        su duomenimis, tokiais pat, kaip main.js faile, BET onSubmit FUNKCIJA TURI RODYTI [1.3] funkciją

    [10:20]
    1.5 initialize metode, panaudoti this.table ir this.form komponenetus, kad sukurti atvaizdavimą viens šalia kito
*/

const userManagerComponent = new UserManagerComponent({});
rootElement.append(userManagerComponent.htmlElement);



