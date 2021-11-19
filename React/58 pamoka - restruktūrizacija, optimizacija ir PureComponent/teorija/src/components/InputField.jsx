import React from 'react';
import styles from './InputField.module.css';
import Field from './Field';

class InputField extends React.PureComponent {

  render() {
    const { name, value, label, id, error, handleChange, type } = this.props;

    const inputClassName = `${styles.input}${error ? ' ' + styles.inputError : ''}`;

    return (
      <Field
        label={label}
        id={id}
        error={error}
      >
        <input
          id={id}
          type={type}
          name={name}
          className={inputClassName}
          value={value}
          onChange={handleChange}
        />
      </Field>
    );
  }
}

export default InputField;
