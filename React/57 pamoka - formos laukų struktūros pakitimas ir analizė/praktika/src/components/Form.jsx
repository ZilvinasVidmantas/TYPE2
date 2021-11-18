import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: props.fields.map(fieldProps => ({
        ...fieldProps,
        value: "",
        error: null
      }))
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      const formedData = this.state.fields
        .reduce((res, { name, value }) => {
          res[name] = value;
          return res;
        }, {});

      console.log(formedData);
    }
  }

  isValid = () => this.state.fields
    .every(({ error }) => error === null);


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
    const { fields } = this.state;
    return fields.map(({ name, type, options, ...rest }) => {
      const commonProps = {
        key: name,
        name: name,
        id: `${name}`,
        handleChange: (value) => this.handleFieldChange(name, value),
        ...rest,
      }
      switch (type) {
        case "select": return <SelectField options={options} {...commonProps} />;
        default: return <InputField type={type} {...commonProps} />
      }
    });
  }

  render() {
    const { title, submitBtnText } = this.props;

    const buttonClassName = this.isValid() ? styles.btn : `${styles.btn}  ${styles.btnMuted}`;
    const titleClassName = styles.title;
    const finalSubmitBtnText = submitBtnText ?? "Submit";

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <h1 className={titleClassName}>{title}</h1>
          {this.createFields()}
          <button type="submit" className={buttonClassName}>{finalSubmitBtnText}</button>
        </form>
      </div>
    );
  }
}

export default Form;