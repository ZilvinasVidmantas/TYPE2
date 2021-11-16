import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {

    return (
      <main>
        <h1>Aplikacijos pavadinimas</h1>
        <Form title="Registracija" submitBtnText="Registruotis"/>
        <Form title="Prisijungimas"/>
      </main>
    );
  }
}

export default App;
