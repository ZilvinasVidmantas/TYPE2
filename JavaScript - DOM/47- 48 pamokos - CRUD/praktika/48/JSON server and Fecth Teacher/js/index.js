// javascript for index.html

const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async (searchByTerm) => {
  let url = "http://localhost:3000/posts?_sort=likes&_order=desc";
  if(searchByTerm){
    url += `&q=${searchByTerm}`;
  }

  const res = await fetch(url);
  const posts = await res.json();

  let output = "";
  posts.forEach(post => {
    output += `
      <div class="post">
        <h2> ${post.title} </h2>
        <p> ${post.body.slice(0, 100)} </p>
        <span> ${post.likes} likes </span><br>
        <a href="details.html?id=${post.id}"> read more... </a>
      </div>
    `;
  });
  container.innerHTML = output;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

//window.addEventListener("DOMContentLoaded", () => renderPosts());
renderPosts();