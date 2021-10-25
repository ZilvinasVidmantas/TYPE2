class TableComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.render();
  }

  render = () => {
    const colNames = this.props.colNames;
    const data = this.props.data;

    const tableHeaders = colNames.map(colName => `<th>${colName}</th>`).join('');

    const tableRows = data
      .map(rowData => {
        const rowCols = rowData.map(text => `<td>${text}</td>`).join('');
        return `<tr>${rowCols}</tr>`;
      })
      .join('');

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
    <thead class="thead-dark text-white">
      <tr class="bg-dark">${tableHeaders}</tr>
    </thead>
    <tbody>${tableRows}</tbody>`;
  }
}
