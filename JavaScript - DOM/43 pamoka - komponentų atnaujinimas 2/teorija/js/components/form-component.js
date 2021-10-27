class FormComponent {
  /**
   * Atliekamas komponento sukūrimas, sukuriami props ir state kintamieji
   * props - iš išorės perduoti kintamieji
   * state - kintamieji kuriuos keis komponentas
   * 
   * @param {Object} props - perduoti kintamieji komponentui
   */
  constructor(props) {
    this.props = JSON.parse(JSON.stringify(props));
    this.initialize();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = this.fields.reduce((res, field) => {
      res[field.name] = field.value;
      return res;
    }, {});
    console.log(formData);
  }

  /**
   * atliekami pradiniai komponento formavimo veiksmai
   */
  initialize = () => {
    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'my-3 p-3 shadow rounded';
    this.htmlElement.innerHTML = `
    <h2>Formos pavadinimas</h2>
    <div class="mb-3">
      <label for="role" class="form-label">Rolė</label>
      <select class="form-control" id="role" name="role">
        <option selected disabled>-- Pasirinkite rolę...</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
        <option value="user">User</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">El. paštas</label>
      <input type="text" class="form-control" id="email" name="email">
    </div>
    <div class="mb-3">
      <label for="imgSrc" class="form-label">Nuotrauka</label>
      <input type="text" class="form-control" id="imgSrc" name="imgSrc">
    </div>
    <div class="text-center">
      <button class="btn btn-primary">Išsaugoti</button>
    </div>`;
    this.fields = Array.from(this.htmlElement.querySelectorAll('[name]'));
    this.htmlElement.addEventListener('submit', this.handleSubmit);
  }

  /**
   * Atliekami veiksmai pasikeitus komponento duomenims
   */
  render = () => {

  }
}