import React from 'react';
import InputField from './components/InputField';
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Čia yra appsas</h1>
        <InputField
          name="Email"
          value="virgis@gmail.com"
          type="email"
          id="input-email"
        />
        <InputField
          name="Password"
          value=""
          type="password"
          id="input-password"
        />
      </div>
    );
  }
}

export default App;
