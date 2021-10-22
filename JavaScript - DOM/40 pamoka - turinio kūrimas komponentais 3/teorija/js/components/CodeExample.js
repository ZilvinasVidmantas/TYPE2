/*
  type CodeExampleLine = {
    type: 'comment' | 'code',
    text: string
  };

  type Lines = Array<CodeExampleLine>;

  type CodeExampleProps = {
    lines: Lines
  }
*/

class CodeExample {
  constructor(props) {
    this.htmlElement = document.createElement('div');
    this.props = props;
    this.render();
  }

  renderLines = () => {
    const lineElements = this.props.lines.map(({ type, text }) => {
      const line = document.createElement('div');
      if (type === 'comment') {
        line.className = 'code__comment';
        line.innerHTML = '// ';
      }
      line.innerHTML += text;
      return line;
    });
    this.htmlElement.append(...lineElements);
  }

  render = () => {
    this.htmlElement.className = 'code';
    this.renderLines();
  }
}
