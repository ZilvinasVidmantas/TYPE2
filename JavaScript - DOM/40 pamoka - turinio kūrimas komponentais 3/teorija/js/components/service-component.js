class ServiceComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { title, text, href, imgSrc } = this.props;
    this.htmlElement.className = 'service-component';
    this.htmlElement.innerHTML = `
      <img src="${imgSrc}" class="service-component__image">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="text-end" >
        <a href="${href}" class="btn btn-info">Skaityti Daugiau</a>
      </div>
    `;
  }
}