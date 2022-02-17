import * as React from 'react';
import Card from './card';

const title = 'pavadinimas';
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos tempore possimus ipsam quasi similique est! Laborum minima temporibus ex.';

const App = () => {
  return (<div>
    <Card title={title} text={text} />
  </div>);
};

export default App;
