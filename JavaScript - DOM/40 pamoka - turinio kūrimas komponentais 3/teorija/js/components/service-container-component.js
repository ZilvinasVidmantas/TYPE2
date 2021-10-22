class ServiceContainerComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { data } = this.props;
    this.htmlElement.className = 'service-container-component';
    const components = data.map(x => new ServiceComponent(x));
    const htmlElements = components.map(x => x.htmlElement);
    this.htmlElement.append(...htmlElements);
  }
}