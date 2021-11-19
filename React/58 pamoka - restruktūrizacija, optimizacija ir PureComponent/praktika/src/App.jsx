import React from "react";
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
              label: "Vardas Pavardė"
            },
            {
              name: "phone",
              type: "tel",
              label: "Telefonas"
            },
            {
              name: "email",
              type: "email",
              label: "Elektroninis Paštas"
            },
            {
              name: "roomType",
              label: "Kambario Tipas",
              type: "select",
              options: [
                { value: "", text: "" },
                { value: "1", text: "Standartinis" },
                { value: "2", text: "Prabangus" }
              ]
            }
          ]}
        />
      </section>
    );
  }
}

export default App;