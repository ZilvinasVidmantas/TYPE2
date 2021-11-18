import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {

      // iteracija | kaupiamoji - res | elementas           | name       | value                | res[name] = value;               | perduota reiksme sekanciai iteracijai
      // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // 1         | {}               | ['email', {...}]    | 'email'    | 'balvonas@gmail.com' | res.email = 'balvonas@gmail.com' | {email: 'balvonas@gmail.com'}
      // 2         | {email: '...'}   | ['password', {...}] | 'password' | 'Labas123'           | res.password = 'Labas123'        | {email: 'balvonas@gmail.com', password: 'Labas123'}

      // const formData = Object.entries(this.state.fields)
      //   .reduce((res, [name, { value }]) => ({ ...res, [name]: value }), {});

      const formData = Object.entries(this.state.fields).reduce((res, [name, { value }]) => {
        res[name] = value;
        return res;
      }, {});

      this.props.onSubmit(formData);
    }
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

  createFields = () => {
    const { fields, formNum } = this.state;

    return Object.entries(fields)
      .map(([name, { value, type, options, ...commonProps }]) => {
        const fieldProps = {
          key: name,
          name,
          value,
          id: `form${formNum}_${name}`,
          handleChange: (value) => this.handleFieldChange(name, value),
          ...commonProps,
        }
        switch (type) {
          case 'select': return <SelectField options={options} {...fieldProps} />; 
          /* kiti variantai: radioGroup, inputGroup, ir t.t. ) ..*/
          default: return <InputField type={type} {...fieldProps} />
        }
      });
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
