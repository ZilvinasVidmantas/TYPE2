class FormComponent {
  /**
   * Atliekamas komponento sukūrimas, sukuriami props ir state kintamieji
   * props - iš išorės perduoti kintamieji
   * state - kintamieji kuriuos keis komponentas
   * 
   * @param {Object} props - perduoti kintamieji komponentui
   */
  constructor(props) {
    this.props = clone(props);
    this.initialize();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = this.fields.reduce((res, field) => {
      res[field.name] = field.value;
      return res;
    }, {});
    this.props.onSubmit(formData);
  }

  createFieldString = ({ name, type, title }) => `
    <div class="mb-3">
      <label for="${name}" class="form-label">${title}</label>
      <input type="${type}" class="form-control" id="${name}" name="${name}">
    </div>`;

  /**
   * atliekami pradiniai komponento formavimo veiksmai
   */
  initialize = () => {
    const { title, fields } = this.props;
    const fieldsString = fields.map(this.createFieldString).join('');

    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'my-3 p-3 shadow rounded';
    this.htmlElement.innerHTML = `
    <h2>${title}</h2>
    ${fieldsString}
    <div class="text-center">
      <button class="btn btn-success">Išsaugoti</button>
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

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

//                               'age'
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    //        obj['age']     21
    //        obj['age']     20
    //        obj['age']     20
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc; 
    /* 
      1: {
        21: [{ name: 'Alice', age: 21 }]
      }

      2: { 
        21: [{ name: 'Alice', age: 21 }],
        20: [{ name: 'Max', age: 20 }]
      }

      3: { 
        21: [{ name: 'Alice', age: 21 }],
        20: [{ name: 'Max', age: 20 }, { name: 'Jane', age: 20 }]
      }

    */
  }, {})
}

let groupedPeople = groupBy(people, 'age')