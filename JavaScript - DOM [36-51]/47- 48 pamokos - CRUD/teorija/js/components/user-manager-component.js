let idBasis = 88;

const generateId = () => String(idBasis++);

// state - komponento būsena, kuri keičiasi programos gyvavimo metu
// state - component state, which changes at runtime
// props - pradiniai komponeneto duomenys, kurie nekeičiami komponento viduje (nebent juos keistų išoriniai komponenetai)
// props - initial component data, which do not change insede component logic (unless they ar updated from outside)
class UserManagerComponent {
  constructor() {
    this.state = {
      users: [], // Ateityje, aš šiuos duomenis parisiųsiu iš serverio
      editedUserId: null,
      loading: false
    };
    this.initialize();
  }

  fetchUsers = () => {
    this.state.loading = true;
    API.getUsers(
      (users) => {
        this.state.users = users;
        this.state.loading = false;
        this.render();
      },
      (err) => console.error(err)
    );
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
    API.deleteUser(
      () => API.getUsers(
        (users) => {
          this.state.users = users;
          if (this.state.editedUserId === id) this.setCreateMode();
          this.render();
        },
        (err) => console.error(err)
      ),
      (err) => console.error(err),
      id
    )
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

    this.tableContainer = document.createElement('div');
    this.tableContainer.className = 'col-12 col-lg-9';
    this.htmlElement.appendChild(this.tableContainer);
  }

  initialize = () => {
    this.fetchUsers();
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row flex-lg-row-reverse g-3';

    this.initializeForm();
    this.initializeTable();
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.tableContainer.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
    } else {
      this.tableContainer.innerHTML = '';
      this.table.updateProps({ data: this.formatTableData() });
      this.tableContainer.appendChild(this.table.htmlElement);
    }
  }
}

// 11:40 - atsakymai
