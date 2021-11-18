import React from "react";
import styles from "./InputField.module.css";

class InputField extends React.Component {

  render() {
    const { name, value, label, id, handleChange, type } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}:</label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default InputField;