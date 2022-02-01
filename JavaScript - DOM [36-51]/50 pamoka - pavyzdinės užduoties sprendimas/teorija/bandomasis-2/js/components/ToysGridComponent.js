class ToysGridComponent {
  constructor() {
    this.state = {
      toys: [],
      loading: false
    };
    this.init();
  }

  saveToys = toys => {
    this.state = { toys, loading: false };

    this.render();
  }

  deleteToy = id => API.deleteToy(id, this.fetchToys, this.showError);

  showError = msg => alert(msg);

  fetchToys = () => API.fetchToys(this.saveToys, this.showError);

  wrapChild = element => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3 align-self-stretch';
    wrapper.append(element);
    return wrapper;
  }

  init = () => {
    this.state.loading = true;
    setTimeout(this.fetchToys, 1000);
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3';

    this.render();
  }

  render = () => {
    const { loading, toys } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (toys.length > 0) {
      this.htmlElement.innerHTML = '';
      const children = toys
        .map(({ id, ...toyProps }) => new ToyCardComponent({
          ...toyProps,
          onDelete: () => this.deleteToy(id)
        }))
        .map(x => x.htmlElement)
        .map(this.wrapChild);
      this.htmlElement.append(...children);
    } else {
      this.htmlElement.innerHTML = 'Sorry, no items at this moment';
    }
  }
}