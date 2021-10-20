/*
  type ParagraphChild = {
    componentName: 'Paragraph',
    props: ParagraphProps
  }

  type CodeExampleChild = {
    componentName: 'CodeExample',
    props: CodeExampleProps
  }

  type Child = ParagraphChild | CodeExampleChild;

  type SectionProps = {
    title: string,
    children?: Array<Child>,
    subSections?: Array<SectionProps>
  }
*/

class Section {
  constructor(props) {
    // htmlElement - tai objekto savybė, kuria išsaugome komponento HTMLElement
    this.htmlElement = document.createElement('section'); // <section></section>
    this.props = props;
    // Po Sekcijos komponento sukūrimo, iškarto iškviečiame sudarymo metodą 'render';
    this.render();
  }

  renderChildren = (container) => {
    const components = this.props.children.map(({ componentName, props }) => {
      let component;
      switch (componentName) {
        case 'Paragraph':
          component = new Paragraph(props);
          break;
        case 'CodeExample':
          component = new CodeExample(props);
          break;
        default:
          throw TypeError(`Nėra sukurtas toks komponentas ${componentName}`);
      }
      return component;
    });
    // components.forEach(component => container.appendChild(component.htmlElement));
    const htmlElements = components.map(component => component.htmlElement)
    container.append(...htmlElements);
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

    if (this.props.children) this.renderChildren(container);
  }
}