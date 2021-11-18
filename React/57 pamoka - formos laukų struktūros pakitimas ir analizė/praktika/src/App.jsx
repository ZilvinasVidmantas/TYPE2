import React from "react";
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
              label: "Prisijungimo Vardas"
            },
            {
              name: "email",
              type: "email",
              label: "Elektroninis Paštas"
            },
            {
              name: "password",
              type: "password",
              label: "Prisijungimo Slaptažodis"
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
              ]
            }
          ]}
        />
      </section>
    );
  }
}

export default App;