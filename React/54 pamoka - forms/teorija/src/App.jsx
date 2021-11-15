import React from 'react';
import Form from './components/Form';
class App extends React.Component {

  render() {

    return (
      <main>
        <h1>Aplikacijos pavadinimas</h1>
        <Form title="Registracija" />
        <Form title="Prisijungimas" />
      </main>
    );
  }
}

export default App;

/*
  Įgalinkite formos komponenetui, dinamišką mygtuko tekstą, naudojant this.props.submitBtnText
  11:55
*/
