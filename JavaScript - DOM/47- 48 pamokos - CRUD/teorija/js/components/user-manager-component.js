let idBasis = 88;

const generateId = () => String(idBasis++);

// state - komponento būsena, kuri keičiasi programos gyvavimo metu
// state - component state, which changes at runtime
// props - pradiniai komponeneto duomenys, kurie nekeičiami komponento viduje (nebent juos keistų išoriniai komponenetai)
// props - initial component data, which do not change insede component logic (unless they ar updated from outside)
class UserManagerComponent {
  constructor() {
    this.state = {
      users: clone(userDataArr), // Ateityje, aš šiuos duomenis parisiųsiu iš serverio
      editedUserId: null
    };
    this.initialize();
  }

  // Pritaiko vartotojų duomenis lentelei
  formatTableData = () => this.state.users.map(({ id, imgSrc, email, role }) => ({
    id,
    rowData: [`<img class="table__img "src="${imgSrc}" />`, email, role]
  }))

  // Sukuria naują vartotoją
  createUser = (formData) => {
    const user = {
      ...formData,
      id: generateId()
    };
    this.state.users.push(user);
    this.render();
  }

  setCreateMode = () => {
    this.state.editedUserId = null;
    this.form.updateProps({
      title: 'Sukurti vartotoją',
      btnText: 'Sukurti',
      color: 'success',
      onSubmit: this.createUser
    });
    this.form.clearFields();
  }

  // Ištrina vartotoją
  deleteUser = (id) => {
    this.state.users = this.state.users.filter(user => user.id !== id);

    if (this.state.editedUserId === id) this.setCreateMode();
    this.render();
  }

  // TODO: įgalina vartotjo redagavimą
  editUser = (userId) => {
    if (this.state.editedUserId === userId) {
      this.setCreateMode();
      this.render();
    } else {
      this.state.editedUserId = userId;
      const { id, ...user } = this.state.users.find(x => x.id === userId);
      this.form.updateProps({
        title: 'Atnaujinti vartotoją',
        btnText: 'Atnaujinti',
        color: 'warning',
        fields: Object.entries(user).map(([name, value]) => ({ name, value })),
        onSubmit: (formData) => this.updateUser({ id, ...formData })
      })
    }
  }

  updateUser = ({ id, ...formData }) => {
    const ii = this.state.users.findIndex(x => x.id === id);
    this.state.users[ii] = { ...this.state.users[ii], ...formData };

    this.form.updateProps({
      title: 'Sukurti vartotoją',
      btnText: 'Sukurti',
      color: 'success',
      onSubmit: this.createUser
    })

    this.render();
  }

  initializeForm = () => {
    this.form = new FormComponent({
      title: 'Sukurti vartotoją',
      btnText: 'Sukurti',
      color: 'success',
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
      data: this.formatTableData(),
      onDelete: this.deleteUser,
      onEdit: this.editUser
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
