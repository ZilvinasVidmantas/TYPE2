class UserManagerComponent {
  constructor(props) {
    this.props = clone(props);
    this.initialize();
  }

  createUser = (user) => {
    console.log('createUser:', user);
  }

  initialize = () => {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row flex-lg-row-reverse';

    this.formContainer = document.createElement('div');
    this.formContainer.className = 'col-12 col-lg-3';
    this.formContainer.innerHTML = 'forma';
    this.htmlElement.appendChild(this.formContainer);

    this.tableContainer = document.createElement('div');
    this.tableContainer.className = 'col-12 col-lg-9';
    this.tableContainer.innerHTML = 'lentelė';
    this.htmlElement.appendChild(this.tableContainer);
  }

  render = () => {

  }
}