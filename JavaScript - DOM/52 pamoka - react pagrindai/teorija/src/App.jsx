import React from 'react';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import Input from './components/Input';
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Čia yra appsas</h1>
        <Paragraph text="tekstas 1"/>
        <Paragraph text="tekstas 2"/>
        <Button content="click 1"/>
        <Button content="click 2"/>
        <Input type="text" value="Jonas"/>
        <Input type="number" value="55"/>
      </div>
    );
  }
}

export default App;

/*
  Sukurkite komponenetą InputField
  Kuriame būtų:
    div - gaubiantis elementas
    label - susietas su įvesties lauku
    input - įvesties laukas
  Panaudokite tokius props:
    name
    value
    type
    id
*/
