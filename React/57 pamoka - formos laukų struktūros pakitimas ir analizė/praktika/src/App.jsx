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
            }
          ]}
        />
      </section>
    );
  }
}

export default App;