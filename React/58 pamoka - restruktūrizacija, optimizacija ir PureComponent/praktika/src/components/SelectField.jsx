import React from "react";
import styles from "./SelectField.module.css";

class SelectField extends React.Component {

  render() {
    const {value, label, id, handleChange, options, error } = this.props;

    const labelClassName = `${styles.label}${error ? ' ' + styles.labelError : ''}`;
    const selectClassName = `${styles.select}${error ? ' ' + styles.selectError : ''}`;

    return (
      <div className={styles.container}>
        <label htmlFor={id} className={labelClassName}>{label}</label>
        <select
          id={id}
          className={selectClassName}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map(({ value, text }) => <option key={value} value={value}>{text}</option>)}
        </select>
        {error ? <div className={styles.error}>{error}</div> : null}
      </div>
    );
  }
}

export default SelectField;