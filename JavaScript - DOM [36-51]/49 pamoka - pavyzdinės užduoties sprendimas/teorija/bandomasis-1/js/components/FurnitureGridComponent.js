class FurnitureGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      furniture: []
    };
    this.init();
  }

  fetchFurniture = () => API.getFurniture(this.saveFurniture, this.showError);

  deleteFurniture = (id) => {
    API.deleteFurniture(
      id,
      this.fetchFurniture,
      this.showError
    );
  }

  saveFurniture = (furniture) => {
    this.state.furniture = furniture;

    this.render();
  }

  showError = error => console.error(error);

  wrapChild = (htmlElement) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-12 col-sm-6 col-lg-4';
    wrapper.append(htmlElement);
    return wrapper;
  }

  init = () => {
    this.fetchFurniture();
    this.htmlElement.className = 'row g-3 justify-content-center';

    this.render();
  }

  render = () => {
    if (this.state.furniture.length === 0) {
      this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 256px" />';
    } else {
      this.htmlElement.innerHTML = '';

      const wrappedElements = this.state.furniture
        .map(({ id, ...cardProps }) => new FurnitureCardComponent({
          ...cardProps,
          onDelete: () => this.deleteFurniture(id)
        }))
        .map(componenent => componenent.htmlElement)
        .map(this.wrapChild);

      this.htmlElement.append(...wrappedElements);
    }
  }
}
