class TableComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.render();
  }

  /**
  * Sukuria vienos eilutės html elementą
  * 
  * @param {Object} rowData vienos eilutės duomenys
  * 
  * @return {HTMLElement} vienos eilutės html elementas
  */
  createRowElement = rowData => {
    const rowCols = rowData.map(text => `<td>${text}</td>`).join('');
    const row = document.createElement('tr');
    row.innerHTML = `
      ${rowCols}
      <td><button class="btn btn-sm btn-danger">✕</button></td>`;

    const btnDelete = row.querySelector('.btn-danger');
    btnDelete.addEventListener('click', () => console.log('Aš tave išktrinsu, eiliau.'));

    return row;
  }

  /**
   * Sukuria eilučių masyvą, pagal šio objekto props.data duomenis
   * 
   * @return {Array} eilučių html eilučių masyvas
   */
  createRows = () => this.props.data.map(this.createRowElement);

  render = () => {
    const colNames = this.props.colNames;

    const tableHeaders = colNames.map(colName => `<th>${colName}</th>`).join('');
    const rows = this.createRows();

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
    <thead class="thead-dark text-white">
      <tr class="bg-dark">${tableHeaders}</tr>
    </thead>
    <tbody></tbody>`;

    const tbody = this.htmlElement.querySelector('tbody');
    tbody.append(...rows);
  }
}
