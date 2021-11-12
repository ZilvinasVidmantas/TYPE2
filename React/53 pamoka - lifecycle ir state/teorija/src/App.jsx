import React from 'react';
import InputField from './components/InputField';
class App extends React.Component {
  state = {
    email: '',
    password: ''
  };

  changeEmail = (email) => {
    this.setState({ email });
  }

  changePassword = (password) => {
    this.setState({ password });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Čia yra appsas</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="email"
            value={this.state.email}
            type="email"
            id="input-email"
            handleChange={this.changeEmail}
          />
          <InputField
            name="password"
            value={this.state.password}
            type="password"
            id="input-password"
            handleChange={this.changePassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
