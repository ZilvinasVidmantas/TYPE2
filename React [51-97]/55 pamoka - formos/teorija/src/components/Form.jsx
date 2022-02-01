import React from 'react';
import InputField from './InputField';

import styles from './Form.module.css';

class Form extends React.Component {
  static #formCount = 0;

  constructor(props) {
    super(props);

    Form.#formCount++;

    this.state = {
      formNum: Form.#formCount,
      fields: this.props.fields.reduce((result, { name, ...fieldProps }) => {
        result[name] = {
          ...fieldProps,
          error: null,
          value: ''
        }
        return result;
      }, {})
    };

  }

  isValid = () => {
    const { fields } = this.state;

    for (const name in fields) {
      if (fields[name].error !== null) {
        return false;
      }
    }

    return true;
  }

  handleFieldChange = (name, value) => {
    const { fields } = this.state;

    this.setState({
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          error: fields[name].validate(value),
          value
        }
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      // tai kas daroma, jeigu forma sėkimnga
    }
  }

  createFields = () => {
    const { fields, formNum } = this.state;

    return Object.entries(fields)
      .map(([name, { value, type, error }]) => (
        <InputField
          key={name}
          name={name}
          value={value}
          type={type}
          id={`form${formNum}_${name}`}
          handleChange={(value) => this.handleFieldChange(name, value)}
          error={error}
        />
      ));
  }

  render() {
    const { title, submitBtnText } = this.props;

    const buttonClassName = this.isValid() ? styles.btn : `${styles.btn}  ${styles.btnMuted}`;
    const finalSubmitBtnText = submitBtnText ?? 'Submit';

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{title}</h2>
        {this.createFields()}
        <button type="submit" className={buttonClassName}>{finalSubmitBtnText}</button>
      </form>
    );
  }
}

export default Form;
