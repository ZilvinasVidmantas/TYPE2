import React from 'react';
import styles from './InputField.module.css';

class InputField extends React.Component {

  render() {
    const { name, value, type, id } = this.props;
    return (
      <div className={styles.container}>
        <label htmlFor={id} className={styles.label}>{name}:</label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          className={styles.input}
        />
      </div>
    );
  }
}

export default InputField;