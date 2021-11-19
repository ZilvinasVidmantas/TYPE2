import React from 'react';
import validator from 'validator';
import Form from './components/Form';

class App extends React.Component {
  doStuff = (data) => {
    console.log(data);
  }

  render() {
    return (
      <main>
        <h1>Aplikacijos pavadinimas</h1>
        <Form
          title="Prisijungimas"
          submitBtnText="Prisijungti"
          fields={[
            {
              name: 'email',
              type: 'email',
              label: 'Elektroninis paštas',
              validate: (val) => validator.isEmail(val) ? null : 'Netinkamas pašto formatas'
            },
            {
              name: 'password',
              type: 'password',
              label: 'Slaptažodis',
              validate: (val) => validator.isStrongPassword(val, { minSymbols: 0 })
                ? null
                : 'Slaptažodis turi būti mažiausiai 8 simbolių. Jame turi būti nors 1 dižioji, nors 1 mažoji raidės ir nors vienas skaičius',
            },
            {
              name: 'city',
              label: 'Miestas',
              type: 'select',
              options: [
                { value: '', text: '-- Pasirinkite' },
                { value: '1', text: 'Vilnius' },
                { value: '2', text: 'Kaunas' },
                { value: '3', text: 'Klaipėda' },
                { value: '4', text: 'Šiauliai' },
              ],
              validate: (val) => !validator.isEmpty(val) ? null : 'Privaloma pasirinkti miestą'
            }
          ]}
          onSubmit={this.doStuff}
        />
      </main>
    );
  }
}

export default App;
