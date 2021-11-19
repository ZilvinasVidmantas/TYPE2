import React from "react";
import styles from "./InputField.module.css";

class InputField extends React.Component {

  render() {
    const {value, label, id, handleChange, type } = this.props;
    
    const labelClassName = `${styles.label}`;
    const inputClassName = `${styles.input}`;

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
      </div>
    );
  }
}

export default InputField;