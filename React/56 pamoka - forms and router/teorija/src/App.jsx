import React from 'react';
import Form from './components/Form';
import validator from 'validator';

class App extends React.Component {
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
              validate: (val) => validator.isEmail(val) ? null : 'Netinkamas pašto formatas'
            },
            {
              name: 'password',
              type: 'password',
              validate: (val) => validator.isStrongPassword(val, { minSymbols: 0 })
                ? null
                : 'Slaptažodis turi būti mažiausiai 8 simbolių. Jame turi būti nors 1 dižioji, nors 1 mažoji raidės ir nors vienas skaičius',
            }
          ]}
        />
        <Form
          title="Registracija"
          submitBtnText="Registruotis"
          fields={[
            {
              name: 'name',
              type: 'text',
              validate: (val) => {
                if (validator.isEmpty(val)) {
                  return 'Šis laukas negali būti tuščias'
                }
                if (!validator.isAlpha(val)) {
                  return 'Vardas turi būti tik iš raidžių'
                }
                return null;
              }
            },
            {
              name: 'surname',
              type: 'text',
              validate: (val) => {
                if (validator.isEmpty(val)) {
                  return 'Šis laukas negali būti tuščias'
                }
                if (!validator.isAlpha(val)) {
                  return 'Vardas turi būti tik iš raidžių'
                }
                return null;
              }
            },
          ]}
        />
      </main>
    );
  }
}

export default App;
