import { useState } from "react";

const Home = () => {
  //let name = "CircleK";
  const [name, setName] = useState("CircleK");
  const [year, setYear] = useState(5);

  const handleClickTryMe = (e) => {
    console.log("I've been tried out", e);
  }
  const handleClickTryMeAgain = (name, e) => {
    console.log("I've been tried out again by " + name, e.target);
  }
  const handleClickChangeMe = () => {
    //name = "Petrolium";
    setName("Petrolium");
    setYear(2);
  }

  return (  
    <div className="home">
      <h2> Home Page </h2>
      <button onClick={handleClickTryMe}>Try me</button>
      <button onClick={(e) => handleClickTryMeAgain("CircleK", e)}>Try me again</button>
      <br />
      <p>My favourite petrol station is {name}. I've been using it for {year} years.</p>
      <button onClick={handleClickChangeMe}>Change me</button>
    </div>
  );
}
 
export default Home;