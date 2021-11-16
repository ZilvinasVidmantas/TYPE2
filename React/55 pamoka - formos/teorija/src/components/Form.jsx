import React from 'react';
import InputField from './InputField';
import validator from 'validator';
import styles from './Form.module.css';

class Form extends React.Component {
  static #formCount = 0;

  constructor(props) {
    super(props);

    Form.#formCount++;

    this.state = {
      formNum: Form.#formCount,
      fields: {
        email: {
          value: '',
          error: null,
          validate: (val) => validator.isEmail(val) ? null : 'Netinkamas pašto formatas'
        },
        password: {
          value: '',
          error: null,
          validate: (val) => validator.isStrongPassword(val, { minSymbols: 0 })
            ? null
            : 'Slaptažodis turi būti mažiausiai 8 simbolių. Jame turi būti nors 1 dižioji, nors 1 mažoji raidės ir nors vienas skaičius'
        }
      }
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
    console.log({
      fields,
      name,
      value
    })

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

    return Object.entries(fields).map(([name, { value, error }]) => (
      <InputField
        key={name}
        name={name}
        value={value}
        type="text"
        id={`form${formNum}_${name}`}
        handleChange={(value) => this.handleFieldChange(name, value)}
        error={error}
      />
    ));
  }

  render() {
    const { title, submitBtnText } = this.props;
    const buttonClassName = this.isValid() ? styles.btn : `${styles.btn}  ${styles.btnMuted}`;

    const defaultSubmitBtnText = submitBtnText ?? 'Submit';

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{title}</h2>
        {this.createFields()}
        <button type="submit" className={buttonClassName}>{defaultSubmitBtnText}</button>
      </form>
    );
  }
}

export default Form;
