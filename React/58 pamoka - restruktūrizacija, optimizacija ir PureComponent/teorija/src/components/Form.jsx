import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

import styles from './Form.module.css';

/*
  state = {
    values: {
      email: '',
      password: '',
      city: '',
    },
    errors: {
      email: '',
      password: '',
      city: '',
    },
    fieldsProps: {
      email:    { label: '...', type: '', id='...generuoti...', onValidate: (...) => {...}},
      password: { label: '...', type: '', id='...generuoti...', onValidate: (...) => {...}},
      city:     { label: '...', type: '', id='...generuoti...', onValidate: (...) => {...}},
    },
  } 

*/



class Form extends React.Component {
  static #formCount = 0;

  constructor(props) {
    super(props);
    Form.#formCount++;
    // pertrauka 10:30

    const { fieldsProps, ...state } = props.fields.reduce((res, { name, ...rest }) => {
      res.values[name] = '';
      res.errors[name] = null;
      res.fieldsProps[name] = {
        ...rest,
        id: `form${Form.#formCount}_${name}`
      };

      return res;
    }, {
      values: {},
      errors: {},
      fieldsProps: {}
    });

    this.fieldsProps = fieldsProps;
    this.state = state;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const formData = this.state.fields.reduce((res, { name, value }) => {
        res[name] = value;
        return res;
      }, {});

      this.props.onSubmit(formData);
    }
  }

  isValid = () => this.state.fields.every(({ error }) => error === null);

  handleFieldChange = (name, value) => {
    this.setState({
      fields: this.state.fields.map(field => {
        if (field.name === name) {
          field.value = value;
          field.error = field.validate(value);
        }
        return field;
      })
    });
  }

  createFields = () => {
    const { fields, formNum } = this.state;
    return fields.map(({ name, type, options, ...rest }) => {
      const commonProps = {
        key: name,
        name,
        id: `form${formNum}_${name}`,
        handleChange: (value) => this.handleFieldChange(name, value),
        ...rest,
      }
      switch (type) {
        case 'select': return <SelectField options={options} {...commonProps} />;
        default: return <InputField type={type} {...commonProps} />
      }
    });
  }

  render() {
    const { title, submitBtnText } = this.props;
    console.log(`Form[${this.state.formNum}]`)

    const buttonClassName = this.isValid() ? styles.btn : `${styles.btn}  ${styles.btnMuted}`;
    const finalSubmitBtnText = submitBtnText ?? 'Submit';

    return (
      <div style={{ display: 'flex' }}>
        <pre style={{ width: '300px', flexGrow: 0, overflowX: 'scroll', border: '1px solid black', marginRight: '2rem' }}>
          {JSON.stringify(this.state, undefined, 2)}
        </pre>
        <form onSubmit={this.handleSubmit}>
          <h2>{title}</h2>
          {this.createFields()}
          <button type="submit" className={buttonClassName}>{finalSubmitBtnText}</button>
        </form>
      </div>
    );
  }
}

export default Form;
