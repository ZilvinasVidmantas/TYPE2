const rootElement = document.querySelector('#root');

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

const dogTableComponent = new TableComponent({
  colNames: ['Nuotrauka', 'Vardas', 'Veislė'],
  data: dogDataArr.reduce((rowData, { name, breed, imgSrc, id }) => [...rowData, {
    id,
    rowData: [
      `<img class="table__img "src="${imgSrc}" />`,
      name,
      breed,
    ]
  }], [])
});

// Papildykite kiekvienos duomenų eilutės paskutinį stulpelį edit mygtuku,
// kurį paspaudus būtų iškviečiamas editItem metodas (kurį reikia sukurti):
//  - edit mygtuko tekstas: '⟳'
//  - edit mygtuko klasės: 'btn btn-warning'
//  - perduokite editItem metodui, paspausto item'o id
//  - editItem metodas turi konsolėje parašyti: 'Atnaujinta: ${id}';

rootElement.appendChild(userTableComponent.htmlElement);
rootElement.appendChild(dogTableComponent.htmlElement);
