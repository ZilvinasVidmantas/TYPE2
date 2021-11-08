// javascript for details.html

const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const url = "http://localhost:3000/posts/" + id;

const renderPosts = async () => {
  const res = await fetch(url);
  const post = await res.json();

  let output = "";
  output = `
    <h2> ${post.title} </h2>
    <p> ${post.body} </p>
    <span> ${post.likes} likes </span>
  `;

  container.innerHTML = output;
}

deleteBtn.addEventListener("click", async (e) =>{
  await fetch(url, {
    method: "DELETE"
  });

  window.location.replace("index.html");
});

renderPosts();