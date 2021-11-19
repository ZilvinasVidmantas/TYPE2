import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import styles from './Form.module.css';

class Form extends React.Component {
  static #formCount = 0;

  constructor(props) {
    super(props);
    Form.#formCount++;

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

  /*
    1. Pagal pakitusią struktūrą, kvieskite funkciją this.props.onSubmit su formos duomenimis

    10 min pertrauka
    5 min atilikimui
    tęsiame: 11:30
  */
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

  isValid = () => Object.values(this.state.errors).every(x => x === null);

  handleFieldChange = (name, value) => {
    const { fieldsProps, state: { values, errors } } = this;
    console.log(this);

    this.setState({
      values: {
        ...values,
        [name]: value
      },
      errors: {
        ...errors,
        [name]: fieldsProps[name].validate(value)
      }
    });
  }

  createFields = () => {
    const { fieldsProps, state: { values, errors } } = this;

    return Object.keys(values).map(name => {
      const { type, options, ...commonProps } = fieldsProps[name]
      const fieldProps = {
        key: name,
        name,
        ...commonProps,
        error: errors[name],
        handleChange: (value) => this.handleFieldChange(name, value),
      }
      switch (type) {
        case 'select': return <SelectField options={options} {...fieldProps} />;
        default: return <InputField type={type} {...fieldProps} />
      }
    });
  }

  render() {
    const { title, submitBtnText } = this.props;
    console.log(`Form`)

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
