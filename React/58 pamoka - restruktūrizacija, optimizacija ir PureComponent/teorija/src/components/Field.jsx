import React from 'react';
import styles from './Field.module.css';

class Field extends React.Component {
  render() {
    const { label, id, error, children } = this.props;

    const labelClassName = `${styles.label}${error ? ' ' + styles.labelError : ''}`;

    return (
      <div className={styles.container}>
        <label htmlFor={id} className={labelClassName}>{label}</label>
        {children}
        {error ? <div className={styles.error}>{error}</div> : null}
      </div>
    );
  }
}

export default Field;