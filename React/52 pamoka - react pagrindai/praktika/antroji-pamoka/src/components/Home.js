import { useState } from "react";
import PostList from "./PostList";

const Home = () => {
  //let name = "CircleK";
  const [name, setName] = useState("CircleK");
  const [year, setYear] = useState(5);
  
  const [posts, setPosts] = useState([
    { title: "Post numero Uno", body: "Lorem ipsum...", author: "Piotr", id: 0 },
    { title: "Post numero Duo", body: "Lorem ipsum...", author: "Aleksander", id: 1 },
    { title: "Post numero Trio", body: "Lorem ipsum...", author: "August", id: 2 },
    { title: "Post numero Quatro", body: "Lorem ipsum...", author: "Piotr", id: 4 }
  ]);

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
  const handleClickChangeMeAgain = (name, year, e) => {
    setName(name);
    setYear(year);
  }

  return (
    <section className="home">
      <div className="clicks">
        <h2> Home Page </h2>
        <button onClick={handleClickTryMe}>Try me</button>
        <button onClick={(e) => handleClickTryMeAgain("CircleK", e)}>Try me again</button>
        <br />
        <p>My favourite petrol station is {name}. I've been using it for {year} years.</p>
        <button onClick={handleClickChangeMe}>Petrolium</button>
        <button onClick={(e) => handleClickChangeMeAgain("Skull", 5, e)}>Skull</button>
      </div>
      <div className="posts">
        <PostList posts={posts} title="All posts!"/>
        <PostList posts={posts.filter((post) => post.author === "Piotr")} title="Piotr posts!"/>
        {/*
          posts.map((post) => 
            <div className="postPreview" key={post.id}>
              <h2> {post.title} </h2>
              <p> Written by { post.author } </p>
              <p> { post.body } </p>
            </div>
          )
        */}
      </div>
    </section>
  );
}

export default Home;