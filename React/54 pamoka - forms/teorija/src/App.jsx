import React from 'react';
import InputField from './components/InputField';
import validator from 'validator';
import './App.css';

class App extends React.Component {
  state = {
    email: {
      value: '',
      error: null,
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

  isValid = () => {
    for (const field in this.state) {
      if(this.state[field].error !== null) {
        return false;
      }
    }
    return true;
  }

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
    if(this.isValid()){
      // tai kas daroma, jeigu forma sėkimnga
    }
  }

  render() {
    const { email, password } = this.state;
    const buttonClassName = this.isValid() ? 'btn' : 'btn btn--muted';

    return (
      <div>
        <h1>Čia yra appsas</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="email"
            value={email.value}
            type="text"
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
          <button type="submit" className={buttonClassName}>Submit</button>
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