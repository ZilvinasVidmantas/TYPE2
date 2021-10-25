const rootElement = document.querySelector('#root');

const tableComponent = new TableComponent({
  colNames: ['Nuotrauka', 'El. paštas', 'Rolė']
});

console.log(tableComponent);

rootElement.appendChild(tableComponent.htmlElement);
// 9:22