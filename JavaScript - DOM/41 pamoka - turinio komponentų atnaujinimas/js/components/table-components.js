class TableComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.render();
  }

  render = () => {
    this.htmlElement.className = 'table';
  }
}