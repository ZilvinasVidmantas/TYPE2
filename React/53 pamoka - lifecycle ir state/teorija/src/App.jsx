import React from 'react';
import InputField from './components/InputField';
class App extends React.Component {
  state = {
    fields: {
      email: {
        value: ''
      },
      password: {
        value: ''
      }
    }
  }

  changeEmail = (email) => {
    this.setState({
      fields: {
        ...this.state.fields,
        email: {
          ...this.state.fields.email,
          value: email
        }
      }
    });
  }

  changePassword = (password) => {
    this.setState({
      fields: {
        ...this.state.fields,
        password: {
          ...this.state.fields.password,
          value: password
        }
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  }

  render() {
    return (
      <div>
        <h1>Čia yra appsas</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="Email"
            value={this.state.fields.email.value}
            type="email"
            id="input-email"
            onChange={this.changeEmail}
          />
          <InputField
            name="Password"
            value={this.state.fields.password.value}
            type="password"
            id="input-password"
            onChange={this.changePassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
