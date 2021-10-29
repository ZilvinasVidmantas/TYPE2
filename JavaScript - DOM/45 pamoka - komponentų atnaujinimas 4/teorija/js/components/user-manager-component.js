class UserManagerComponent {
  constructor(props) {
    this.props = clone(props);
    this.initialize();
  }

  createUser = (user) => {
    console.log('createUser:', user);
  }

  initializeForm = () => {
    this.form = new FormComponent({
      title: 'Pridėti vartotoją',
      fields: [
        { name: 'role', type: 'text', title: 'Rolė' },
        { name: 'email', type: 'email', title: 'El. Paštas' },
        { name: 'imgSrc', type: 'text', title: 'Nuotraukos nuoroda' },
      ],
      onSubmit: this.createUser
    });

    const formContainer = document.createElement('div');
    formContainer.className = 'col-12 col-lg-3';
    formContainer.appendChild(this.form.htmlElement);
    this.htmlElement.appendChild(formContainer);
  }

  initializeTable = () => {
    const formatedUserDataForTableComponent = userDataArr.reduce((result, { id, imgSrc, email, role }) => {
      result.push({
        id,
        rowData: [`<img class="table__img "src="${imgSrc}" />`, email, role]
      });
      return result;
    }, []);

    this.table = new TableComponent({
      colNames: ['Nuotrauka', 'El. paštas', 'Rolė'],
      data: formatedUserDataForTableComponent
    });

    const tableContainer = document.createElement('div');
    tableContainer.className = 'col-12 col-lg-9';
    tableContainer.appendChild(this.table.htmlElement);
    this.htmlElement.appendChild(tableContainer);
  }


  initialize = () => {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row flex-lg-row-reverse g-3';

    this.initializeForm();
    this.initializeTable();
  }

  render = () => {

  }
}