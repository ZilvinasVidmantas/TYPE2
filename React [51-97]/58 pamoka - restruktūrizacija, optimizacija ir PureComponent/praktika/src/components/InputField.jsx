import React from "react";
import styles from "./InputField.module.css";

class InputField extends React.Component {

  render() {
    const {value, label, id, handleChange, type, error} = this.props;
    
    const labelClassName = `${styles.label}${error ? ' ' + styles.labelError : ''}`;
    const inputClassName = `${styles.input}${error ? ' ' + styles.inputError : ''}`;

    return (
      <div className={styles.container}>
        <label htmlFor={id} className={labelClassName}>{label}:</label>
        <input
          id={id}
          type={type}
          className={inputClassName}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        {error ? <div className={styles.error}>{error}</div> : null}
      </div> 
    );
  }
}

export default InputField;