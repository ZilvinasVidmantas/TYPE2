import Home from './Home';
import Navbar from './Navbar';

function App() {
  /*const pageName = "Mano svetainė";
  const visitorsToday = 50;
  const objektas = {name:"Rokas", age:25};
  const tiesa = true;
  const googleLink = "https://www.google.lt";*/
  
  return (
    <div className="App">
      <Navbar />
      <Home />

      {/*<br /><br /><br /><br /><br />
      <h1> {pageName} </h1>
      <p> Today this site was visited {visitorsToday} times </p>
      <p> {objektas.name} </p>
      <p> {tiesa} </p>
      <p> {"Hello world"} </p>
      <p> {10} </p>
      <p> { ["Labas",21,5,9,"ate",false] } </p>
      <p> { Math.random() * 20 } </p>
      <a href={googleLink} target="_blank">Google site</a>
      */}
    </div>
  );
}

export default App;