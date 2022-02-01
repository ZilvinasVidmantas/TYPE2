import React from 'react';
import InputField from './components/InputField';
import validator from 'validator';

class App extends React.Component {
  state = {
    email: {
      value: '',
      error: null,
      // grąžinti true, jeigu viskas gerai, grąžinti string'ą, su klaida jeigu blogai
      validate: (val) => validator.isEmail(val) ? null : 'Netinkamas pašto formatas'
    },
    password: {
      value: '',
      error: null,
      validate: (val) => validator.isStrongPassword(val, { minSymbols: 0 })
        ? null
        : 'Slaptažodis turi būti mažiausiai 8 simbolių. Jame turi būti nors 1 dižioji, nors 1 mažoji raidės ir nors vienas skaičius'
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

/*
... 11:35 analizė
pertrauka
... 11:45 klausimų viktorina
*/