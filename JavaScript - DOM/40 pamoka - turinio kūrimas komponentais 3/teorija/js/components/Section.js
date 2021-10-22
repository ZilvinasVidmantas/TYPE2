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
    subSections?: Array<SectionProps>,
    level?: number
  }
*/

class Section {
  constructor(props) {
    this.props = props;
    const htmlElementType = this.isSubSection ? 'article' : 'section';
    this.htmlElement = document.createElement(htmlElementType);
    this.render();
  }

  get isSubSection() {
    return Boolean(this.props.level);
  }

  get level() {
    return this.isSubSection ? this.props.level : 1;
  }

  renderHeader = container => {
    const headerNumber = this.level + 1;
    const htmlHeaderType = 'h' + headerNumber;

    const headerClassNumber = headerNumber + 1;
    const headerClassName = 'h' + headerClassNumber;

    const header = document.createElement(htmlHeaderType);
    header.className = headerClassName;
    header.innerHTML = this.props.title;
    container.appendChild(header);
  }

  renderChildren = container => {
    if (!this.props.children) return;

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
    const htmlElements = components.map(component => component.htmlElement)
    container.append(...htmlElements);
  }

  renderSubSections = container => {
    if (!this.props.subSections) return;

    const subSectionComponents = this.props.subSections.map(({ title, children, subSections }) => {
      const subSectionComponent = new Section({
        title,
        children,
        subSections,
        level: this.level + 1
      })
      return subSectionComponent;
    });
    const subSectionHtmlElements = subSectionComponents.map(x => x.htmlElement);
    container.append(...subSectionHtmlElements);
  }

  formatContainer = () => {
    let container;
    if (this.isSubSection) {
      container = this.htmlElement;
      container.className = 'ps-4';
    } else {
      container = document.createElement('div');
      container.className = 'container';
      this.htmlElement.appendChild(container);
    }
    return container;
  }

  // render metodas, naudojamas sugeneruoti komponento turinį
  render = () => {
    const container = this.formatContainer();
    this.renderHeader(container);
    this.renderChildren(container);
    this.renderSubSections(container);
  }
}