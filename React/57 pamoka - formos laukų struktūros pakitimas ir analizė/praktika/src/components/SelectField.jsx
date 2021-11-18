import React from "react";
import styles from "./SelectField.module.css";

class SelectField extends React.Component {

  render() {
    const { name, value, label, id, handleChange, options } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select
          name={name}
          id={id}
          value={value} 
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map(({ value, text }) => <option key={value} value={value}>{text}</option>)}
        </select>
      </div>
    );
  }
}

export default SelectField;