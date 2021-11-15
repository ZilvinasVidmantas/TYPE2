import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Bravo");

  const newPost = (e) => {
    e.preventDefault();
    //patikrinti ar įvestys atitinka reikalavimus
    const post = { title, body, author, id: uuidv4() };
    //papildyti duomenų failą sukurtu post'u
    console.log(post);
  }

  return (
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
  );
}

export default Form;