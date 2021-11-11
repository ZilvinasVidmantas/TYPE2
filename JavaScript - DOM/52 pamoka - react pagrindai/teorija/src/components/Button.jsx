import React from 'react';

class Button extends React.Component{

  render(){
    return <button>{this.props.content}</button>
  }
}

export default Button;