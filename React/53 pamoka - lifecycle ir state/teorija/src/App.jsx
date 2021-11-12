import React from 'react';
import InputField from './components/InputField';

class App extends React.Component {
  state = {
    email: {
      value: '',
      error: null,
      // grąžinti true, jeigu viskas gerai, grąžinti string'ą, su klaida jeigu blogai
      validate: (val) => val.length < 10 ? null : 'Įvesties laukas negali būti ilgesnis nei 10 simbolių'
    },
    password: {
      value: '',
      error: null,
      validate: (val) => val.length < 10 ? null : 'kitoks klaidos aprašymas'
    }
  };

  changeEmail = (value) => {
    this.setState({
      email: {
        ...this.state.email,
        error: this.state.email.validate(value),
        value
      }
    });
  }

  changePassword = (value) => {
    this.setState({
      password: {
        ...this.state.password,
        error: this.state.password.validate(value),
        value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;


    return (
      <div>
        <h1>Čia yra appsas</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="email"
            value={email.value}
            type="email"
            id="input-email"
            handleChange={this.changeEmail}
            error={email.error}
          />
          <InputField
            name="password"
            value={password.value}
            type="password"
            id="input-password"
            handleChange={this.changePassword}
            error={password.error}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
