// javascript for create.html

const form = document.querySelector("form");

const createPost = async (e) =>{
  e.preventDefault();

  let url = "http://localhost:3000/posts";
  const doc = {
    title : form.title.value,
    body : form.body.value,
    likes : 0
  }

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {"Content-Type":"application/json"}
  });

  window.location.replace("index.html");
}

form.addEventListener("submit", createPost);