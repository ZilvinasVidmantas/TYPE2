import React from "react";
import validator from "validator";
import Form from "./components/Form"

class App extends React.Component {
  render() {
    return (
      <section>
        <Form
          title="Registracija"
          submitBtnText="Registruotis"
          fields={[
            {
              name: "username",
              type: "text",
              label: "Prisijungimo Vardas",
              validate: (val) => validator.isAscii(val)
                ? null
                : 'Netinkamas vartotojo vardas'

            },
            {
              name: "email",
              type: "email",
              label: "Elektroninis Paštas",
              validate: (val) => validator.isEmail(val)
                ? null
                : 'Netinkamas pašto formatas'
            },
            {
              name: "password",
              type: "password",
              label: "Prisijungimo Slaptažodis",
              validate: (val) => validator.isStrongPassword(val, { minSymbols: 0 })
                ? null
                : 'Slaptažodis turi būti mažiausiai 8 simbolių. Jame turi būti nors 1 dižioji, nors 1 mažoji raidės ir nors vienas skaičius',
            },
            {
              name: "region",
              label: "Regionas",
              type: "select",
              options: [
                { value: "", text: "" },
                { value: "13", text: "13'ta apygarda" },
                { value: "12", text: "12'ta apygarda" },
                { value: "9", text: "9'ta apygarda" }
              ],
              validate: (val) => !validator.isEmpty(val)
                ? null
                : 'Privaloma pasirinkti miestą'
            }
          ]}
        />
      </section>
    );
  }
}

export default App;