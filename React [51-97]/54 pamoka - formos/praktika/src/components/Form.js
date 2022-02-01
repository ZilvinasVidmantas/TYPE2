import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Data from "../data";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Bravo");

  const newPost = (e) => {
    e.preventDefault();
    //patikrinti ar įvestys atitinka reikalavimus
    const post = { title, body, author, id: uuidv4() };
    //Data.push(post);
    //^papildyti duomenų failą sukurtu post'u
    console.log(Data);
  }

  const updatePosts = () => {
    document.querySelector(".updatedPosts").innerHTML = "cia data.map'as"; // Data.map() DOM
  }

  return (
    <section>
      <div className="create">
        <h1 className="formName">Add new Post</h1>
        <form onSubmit={newPost}>
          <label>Post title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Post body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label>Post author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Jhonny">Jhonny</option>
            <option value="Bravo">Bravo</option>
          </select>
          <button>Add Post</button>
        </form>
        {/*
        <p> {title} </p>
        <p> {body} </p>
        <p> {author} </p>
        */}
      </div>
      <div className="Posts">
        <button onClick={updatePosts}>Update</button>
        <div className="updatedPosts">

        </div>
      </div>
    </section>
  );
}

export default Form;