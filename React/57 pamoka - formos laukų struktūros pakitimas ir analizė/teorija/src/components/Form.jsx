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
      // fields: this.props.fields.reduce((result, { name, ...fieldProps }) => {
      //   result[name] = {
      //     ...fieldProps,
      //     error: null,
      //     value: ''
      //   }
      //   return result;
      // }, {})
      fields: props.fields.map(fieldProps => ({
        ...fieldProps,
        value: '',
        error: null
      }))
    };
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
        return {
          ...field,
          value: field.name === name ? value : field.value,
          error: field.name === name ? field.validate(value) : field.error
        }
      })
    });
  }

  createFields = () => {
    const { fields, formNum } = this.state;

    return fields.map(({ name, value, type, options, ...commonProps }) => {
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
      <div style={{ display: 'flex' }}>
        <pre style={{ width: '300px', flexGrow: 0, overflowX: 'scroll', border: '1px solid black', marginRight: '2rem'}}>
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

/*
  Išanalizuokite metodų pritaikymą pakitusiai this.fields.props struktūrai, {} -> []
    * išanalizuokite kiekvieną metodą
    * suformuokite klausimus
    
  10 min pertrauka
  20 min analizavimas
  klausimų atsakymai: 11:30
    
*/
