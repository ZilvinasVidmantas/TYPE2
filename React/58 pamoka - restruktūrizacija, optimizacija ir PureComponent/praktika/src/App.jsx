import React from "react";
import validator from "validator";
import Form from "./components/Form"

class App extends React.Component {
  render() {
    return (
      <section>
        <Form
          title="Kambario Nuoma"
          submitBtnText="Nuomotis"
          fields={[
            {
              name: "nameSurname",
              type: "text",
              label: "Vardas Pavardė",
              validate: (val) => (
                  validator.isAlpha(val.replace(/\s/g, '')) &&  
                  validator.isLength(val, {min:5, max: 50}) && // val.length >= 5 && val.length <=50 &&
                  val.split(/ [A-Z]/).length > 1
                )
                ? null
                : `Prašome įvesti "Vardas Pavardė formatu"`
            },
            {
              name: "phone",
              type: "tel",
              label: "Telefonas",
              validate: (val) => 
                validator.isMobilePhone(val, ["lt-LT", validator.isMobilePhoneLocales])
                ? null
                : 'Privaloma įvesti lietuvišką telefono numerį'
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
              name: "roomType",
              label: "Kambario Tipas",
              type: "select",
              options: [
                { value: "", text: "" },
                { value: "1", text: "Standartinis" },
                { value: "2", text: "Prabangus" }
              ],
              validate: (val) => !validator.isEmpty(val)
                ? null
                : 'Privaloma pasirinkti kambario tipą'
            }
          ]}
        />
      </section>
    );
  }
}

export default App;