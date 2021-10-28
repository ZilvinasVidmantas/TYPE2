const rootElement = document.querySelector('#root');

const userForm = new FormComponent({
  title: 'Pridėti vartotoją',
  fields: [
    { name: 'role', type: 'text', title: 'Rolė' },
    { name: 'email', type: 'email', title: 'El. Paštas' },
    { name: 'imgSrc', type: 'text', title: 'Nuotraukos nuoroda' },
  ],
  onSubmit: data => console.log('as esu isoreje', data)
},
  
);
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


const dogForm = new FormComponent({
  title: 'Pridėti šunį',
  fields: [
    { name: 'name', type: 'text', title: 'Vardas' },
    { name: 'breed', type: 'text', title: 'Veislė' },
    { name: 'imgSrc', type: 'text', title: 'Nuotraukos nuoroda' },
  ]
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
  dogForm.htmlElement,
  dogTableComponent.htmlElement
);



