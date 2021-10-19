class Paragraph {
  constructor(props) {
    this.htmlElement = document.createElement('p');
    this.props = props;
    this.render();
  }

  render = () => {
    const { text, className } = this.props;
    this.htmlElement.innerHTML = text;
    if (className) {
      this.htmlElement.className = className;
    }
  }
}
