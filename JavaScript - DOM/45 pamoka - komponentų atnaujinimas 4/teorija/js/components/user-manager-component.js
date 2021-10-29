let idBasis = 88;

const generateId = () => String(idBasis++);

class UserManagerComponent {
  constructor() {
    this.state = {
      data: userDataArr
    }
    this.initialize();
  }

  // Pritaiko vartotojų lentelei
  formatTableData = () => this.state.data.map(({ id, imgSrc, email, role }) => ({
    id,
    rowData: [`<img class="table__img "src="${imgSrc}" />`, email, role]
  }))

  createUser = (fromData) => {
    const user = {
      ...fromData,
      id: generateId()
    };
    this.state.data.push(user);
    this.render();
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
    this.table = new TableComponent({
      colNames: ['Nuotrauka', 'El. paštas', 'Rolė'],
      data: this.formatTableData()
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
    this.table.updateProps({
      data: this.formatTableData()
    });
  }
}