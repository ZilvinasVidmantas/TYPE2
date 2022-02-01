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
      // fields: props.fields.reduce((result, { name, ...fieldProps }) => {
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
      /*
      Object based:
        this.state.fields = {
          fieldName1: {...otherProps},
          fieldName2: {...otherProps},
          fieldName3: {...otherProps},
        }
        
        Object.entries(this.state.fields)
          [
            [fieldName1, {...otherProps}],
            [fieldName2, {...otherProps}],
            [fieldName2, {...otherProps}],
          ]

      Array based:
        this.state.fields = [
          {name: fieldName1, ...otherProps},
          {name: fieldName2, ...otherProps},
          {name: fieldName3, ...otherProps},
        ]
      */
      const formData = this.state.fields.reduce((res, {name, value}) => {
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
        /* kiti variantai: radioGroup, inputGroup, ir t.t. ) ..*/
        default: return <InputField type={type} {...commonProps} />
      }
    });
  }

  render() {
    const { title, submitBtnText } = this.props;

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
