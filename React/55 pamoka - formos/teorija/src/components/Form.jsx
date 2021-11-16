import React from 'react';
import InputField from './InputField';
import validator from 'validator';
import styles from './Form.module.css';

class Form extends React.Component {
  state = {
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
  };

  isValid = () => {
    for (const field in this.state) {
      if (this.state[field].error !== null) {
        return false;
      }
    }
    return true;
  }

  handleFieldChange = (name, value) => {
    this.setState({
      [name]: {
        ...this.state[name],
        error: this.state[name].validate(value),
        value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      // tai kas daroma, jeigu forma sėkimnga
    }
  }

  render() {
    const { title, submitBtnText } = this.props;
    const { email, password } = this.state;
    const buttonClassName = this.isValid() ? styles.btn : `${styles.btn}  ${styles.btnMuted}`;

    const defaultSubmitBtnText = submitBtnText ?? 'Submit';

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{title}</h2>
        <InputField
          name="email"
          value={email.value}
          type="text"
          id="input-email"
          handleChange={(value) => this.handleFieldChange("email", value)}
          error={email.error}
        />
        <InputField
          name="password"
          value={password.value}
          type="password"
          id="input-password"
          handleChange={(value) => this.handleFieldChange("password", value)}
          error={password.error}
        />
        <button type="submit" className={buttonClassName}>{defaultSubmitBtnText}</button>
      </form>
    );
  }
}
// 9:20
export default Form;
