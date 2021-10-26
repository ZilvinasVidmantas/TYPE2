class TableComponent {
  constructor(props) {
    this.props = JSON.parse(JSON.stringify(props));
    this.state = {
      data: JSON.parse(JSON.stringify(props.data))
    };
    this.htmlElement = document.createElement('table');
    this.render();
  }

  deleteItem = (id) => {
    this.state.data = this.state.data.filter((item) => item.id !== id);
    this.render();
  }

  /**
  * Sukuria vienos eilutės html elementą
  * 
  * @param {Object} rowData vienos eilutės duomenys
  * 
  * @return {HTMLElement} vienos eilutės html elementas
  */
  createRowElement = ({ id, rowData }) => {
    const rowDataStr = rowData.map(text => `<td>${text}</td>`).join('');
    const rowElement = document.createElement('tr');
    rowElement.innerHTML = `${rowDataStr}<td><button class="btn btn-sm btn-danger">✕</button></td>`;

    const btnDelete = rowElement.querySelector('.btn-danger');
    btnDelete.addEventListener('click', () => this.deleteItem(id));

    return rowElement;
  }

  /**
   * Sukuria eilučių masyvą, pagal šio objekto props.data duomenis
   * 
   * @return {Array} eilučių html eilučių masyvas
   */
  createRows = () => this.state.data.map(this.createRowElement);

  render = () => {
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

    const rows = this.createRows();
    const tbody = this.htmlElement.querySelector('tbody');
    tbody.append(...rows);
  }
}
