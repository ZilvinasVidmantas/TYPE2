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
    this.clearFields();
  }

  createFieldString = ({ name, type, title }) => `
    <div class="mb-3">
      <label for="${name}" class="form-label">${title}</label>
      <input type="${type}" class="form-control" id="${name}" name="${name}">
    </div>`;

  createClassNames = () => {
    const color = this.props.color ?? 'primary';
    return {
      btnClassName: `btn btn-${color}`,
      formClassName: `p-3 shadow rounded border border-${color}`
    };
  }

  /**
   * atliekami pradiniai komponento formavimo veiksmai
   */
  initialize = () => {
    const { fields } = this.props;
    const fieldsString = fields.map(this.createFieldString).join('');

    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'p-3 shadow rounded border';
    this.htmlElement.addEventListener('submit', this.handleSubmit);
    this.htmlElement.innerHTML = `
    <h2 class="h4 text-dark"></h2>
    ${fieldsString}
    <div class="text-center">
      <button class="btn"></button>
    </div>`;

    this.header = this.htmlElement.querySelector('h2');
    this.btn = this.htmlElement.querySelector('button');
    this.fields = Array.from(this.htmlElement.querySelectorAll('[name]'));

    this.render();
  }

  updateProps = (newProps) => {
    const { fields: newFields, ...newPrimitiveProps } = newProps;
    const { fields: oldFields, ...oldPrimitiveProps } = this.props;

    const fields = oldFields.map(oldField => {
      const sameField = newFields?.find(x => x.name === oldField.name);
      if (sameField) {
        return {
          ...oldField,
          ...sameField
        }
      }
      return oldField;
    });
    // const fields = oldFields.map(oldField => ({
    //   ...oldField,
    //   ...(newFields.find(x => x.name === oldField.name) ?? {})
    // }));

    this.props = {
      ...oldPrimitiveProps,
      ...newPrimitiveProps,
      fields
    };

    this.render();
  }

  clearFields = () => {
    console.log('clearFields');
    console.log(this.props.fields);
    this.props.fields = this.props.fields.map(x => ({...x, value: ''}));
    console.log(this.props.fields);

    this.render();
  }

  /**
   * Atliekami veiksmai pasikeitus komponento duomenims
   */
  render = () => {
    const { title, fields, btnText } = this.props;
    const { btnClassName, formClassName } = this.createClassNames();

    this.htmlElement.className = formClassName;

    this.header.innerHTML = title;

    this.btn.className = btnClassName;
    this.btn.innerHTML = btnText;

    fields.forEach(({ name, value }) => value !== undefined
      ? this.fields.find(x => x.name === name).value = value
      : undefined
    );

  }
}



