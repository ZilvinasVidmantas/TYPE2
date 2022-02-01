class Section {
  constructor(props) {
    // htmlElement - tai objekto savybė, kuria išsaugome komponento HTMLElement
    this.htmlElement = document.createElement('section'); // <section></section>
    this.props = props;
    // Po Sekcijos komponento sukūrimo, iškarto iškviečiame sudarymo metodą 'render';
    this.render();
  }

  createChildrenComponents = () => {
    return this.props.children.map(({ componentName, props }) => {
      let component;
      switch (componentName) {
        case 'Paragraph':
          component = new Paragraph(props);
          break;
        default:
          throw TypeError(`Nėra sukurtas toks komponentas ${componentName}`);
      }
      return component.htmlElement;
    });
  }

  // render metodas, naudojamas sugeneruoti komponento turinį
  render = () => {
    const container = document.createElement('div');
    container.className = 'container';
    this.htmlElement.appendChild(container);

    const header = document.createElement('h2');
    header.className = 'h3';
    header.innerHTML = this.props.title;
    container.appendChild(header);

    if (this.props.children) {
      container.append(...this.createChildrenComponents());
    }
  }
}