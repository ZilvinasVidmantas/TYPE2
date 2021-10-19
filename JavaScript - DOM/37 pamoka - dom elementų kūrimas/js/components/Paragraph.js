class Paragraph {
  constructor(text, className) {
    this.htmlElement = document.createElement('p');
    this.text = text;
    this.className = className;
    this.render();
  }

  render = () => {
    this.htmlElement.innerHTML = this.text;
    this.htmlElement.className = this.className;
  }
}