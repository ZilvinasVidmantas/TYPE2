import React from 'react';
import styles from './SelectField.module.css';
import Field from './Field';
class SelectField extends React.PureComponent {

  render() {
    const { name, value, label, id, error, handleChange, options } = this.props;

    const selectClassName = `${styles.select}${error ? ' ' + styles.selectError : ''}`;

    return (
      <Field
        label={label}
        id={id}
        error={error}
      >
        <select
          name={name}
          id={id}
          className={selectClassName}
          value={value} 
          onChange={handleChange} 
        >
          {options.map(({ value, text }) => <option key={value} value={value}>{text}</option>)}
        </select>
      </Field>
    );
  }
}

export default SelectField;