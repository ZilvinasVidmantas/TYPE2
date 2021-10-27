const rootElement = document.querySelector('#root');

const userForm = new FormComponent({});
const formatedUserDataForTableComponent = userDataArr.reduce((result, { id, imgSrc, email, role }) => {
  result.push({
    id,
    rowData: [`<img class="table__img "src="${imgSrc}" />`, email, role]
  });
  return result;
}, []);
// 1. Kuriant formos komponentą, perduoti props.title reikšmę, kuri bus panaudota tarp <h2></h2>

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

rootElement.append(
  userForm.htmlElement,
  userTableComponent.htmlElement,
  dogTableComponent.htmlElement
);

