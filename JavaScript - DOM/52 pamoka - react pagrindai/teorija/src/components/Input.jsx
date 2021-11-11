import React from 'react';

class Input extends React.Component {

  render() {
    const { type, value } = this.props;

    return (
      <input
        type={type}
        value={value}
      />
    );
  }
}

export default Input;
