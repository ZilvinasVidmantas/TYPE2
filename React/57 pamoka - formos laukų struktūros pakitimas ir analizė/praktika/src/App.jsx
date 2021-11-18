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
            }
          ]}
        />
      </section>
    );
  }
}

export default App;