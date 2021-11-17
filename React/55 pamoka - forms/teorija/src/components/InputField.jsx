import React from 'react';
import styles from './InputField.module.css';
class InputField extends React.Component {

  render() {
    const { name, value, type, id, handleChange, error } = this.props;

    const labelClassName = `${styles.label}${error ? ' ' + styles.labelError : ''}`;
    const inputClassName = `${styles.input}${error ? ' ' + styles.inputError : ''}`;

    return (
      <div className={styles.container}>
        <label htmlFor={id} className={labelClassName}>{name}:</label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          className={inputClassName}
          onChange={(e) => handleChange(e.target.value)}
        />
        {error ?
          (
            <>
              <span className={styles.errorCircle}>✕</span>
              <div className={styles.error}>{error}</div>
            </>
          )
          : null
        }
      </div>
    );
  }
}

export default InputField;
