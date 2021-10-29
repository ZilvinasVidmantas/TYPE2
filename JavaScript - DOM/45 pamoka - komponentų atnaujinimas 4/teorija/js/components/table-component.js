class TableComponent {
  constructor(props) {
    this.props = JSON.parse(JSON.stringify(props));
    this.state = {
      data: JSON.parse(JSON.stringify(props.data))
    };
    this.initialize();
  }
  
  deleteItem = (id) => {
    this.state.data = this.state.data.filter(item => item.id !== id);
    this.render();
  }

  editItem = (id) => {
    console.log(`Atnaujinta: ${id}`);
  }

  createRowElement = ({ id, rowData }) => {
    const rowDataStr = rowData.map(text => `<td>${text}</td>`).join('');
    const rowElement = document.createElement('tr');
    rowElement.innerHTML = `${rowDataStr}<td>
      <button class="btn btn-sm btn-warning">⟳</button>
      <button class="btn btn-sm btn-danger">✕</button>
    </td>`;

    const btnDelete = rowElement.querySelector('.btn-danger');
    btnDelete.addEventListener('click', () => this.deleteItem(id));

    const btnEdit = rowElement.querySelector('.btn-warning');
    btnEdit.addEventListener('click', () => this.editItem(id));

    return rowElement;
  }

  createRows = () => this.state.data.map(this.createRowElement);

  updateProps = (newProps) => {
    this.props = clone({
      ...this.props,
      ...newProps
    });
    this.state.data = clone(this.props.data);
    this.render();
  }

  initialize = () => {
    this.htmlElement = document.createElement('table');
    const colNames = this.props.colNames;

    const tableHeaders = [...colNames, 'Veiksmai']
      .map(colName => `<th>${colName}</th>`)
      .join('');

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
    <thead class="thead-dark text-white">
      <tr class="bg-dark">${tableHeaders}</tr>
    </thead>
    <tbody></tbody>`;
    this.tbody = this.htmlElement.querySelector('tbody');
    this.render();
  }

  render = () => {
    const rows = this.createRows();
    this.tbody.innerHTML = '';
    this.tbody.append(...rows);
  }
}
