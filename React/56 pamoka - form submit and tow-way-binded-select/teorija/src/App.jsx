import React from 'react';
import validator from 'validator';
import Form from './components/Form';
import SelectField from './components/SelectField';

class App extends React.Component {
  state = {
    error: null,
    selectedOption: '',
    options: [
      { value: '', text: '-- Pasirinkite' },
      { value: '1', text: 'Vilnius' },
      { value: '2', text: 'Kaunas' },
      { value: '3', text: 'Klaipėda' },
      { value: '4', text: 'Šeulę' },
    ],
    validate: (val) => !validator.isEmpty(val) ? null : 'Privaloma pasirinkti miestą'
  }

  handleSelectChange = (newOption) => {
    this.setState({
      selectedOption: newOption,
      error: this.state.validate(newOption)
    })
  }

  doStuff = (data) => {
    console.log(data);
  }

  render() {
    console.log('pasirinkta:', this.state.selectedOption);
    console.table(this.state.options);

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
            }
          ]}
          onSubmit={this.doStuff}
        />
        <SelectField 
          name="select-name"
          value={this.state.selectedOption}
          label="Miestas"
          id="select-id"
          options={this.state.options}
          error={this.state.error}
          handleChange={this.handleSelectChange}
        />
      </main>
    );
  }
}

export default App;

/*
  10 min pertrauka
  analizė
  11:30 - klausimai
*/
