let title;
let paragraph;
let div;
let text;
let ul;
let li;
let img;
let button;

//      1
const sek1 = document.querySelector("#section1");

title = document.createElement("h1");
text = document.createTextNode(moviesData[0].title);;
title.appendChild(text);

paragraph = document.createElement("p");
text = document.createTextNode(moviesData[0].paragraph);
paragraph.appendChild(text);
sek1.append(title, paragraph);

div = document.createElement("div");
ul = document.createElement("ul");
moviesData[0].movies.forEach(movie => {
  /*li = document.createElement("li");
  text = document.createTextNode(movie.movieName);
  li.appendChild(text);
  button = document.createElement("button");
  button.setAttribute("class", "listMovieDelete");
  text = document.createTextNode(moviesData[0].buttons[0]);
  button.appendChild(text);
  li.appendChild(button);
  ul.appendChild(li);*/

  ul.innerHTML += `<li> ${movie.movieName} <button class="listMovieDelete">${moviesData[0].buttons[0]}</button></li>`;
});
div.appendChild(ul);
sek1.appendChild(div);

document.querySelectorAll(".listMovieDelete").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });
});

//      2
const sek2 = document.querySelector("#section2");

button = document.createElement("button");
button.setAttribute("id", "generateMovies");
text = document.createTextNode(moviesData[0].buttons[1]);
button.appendChild(text);
sek2.appendChild(button);

const moviesDiv = document.createElement("div");

document.querySelector("#generateMovies").addEventListener("click", () =>{
  moviesDiv.innerHTML = "";
  moviesData[0].movies.forEach(movie => {
    moviesDiv.innerHTML += `
      <div>
        <button class="divMovieDelete">${moviesData[0].buttons[0]}</button>
        <h2> ${movie.movieName} </h2>
        <img src="${movie.poster}" height="250px">
        <p> <b>Movie info:</b> <br> 
          <b>Length:</b> ${movie.length} minutes <br>
          <b>Release Year:</b> ${movie.releaseYear} <br>
          <b>IMDB score:</b> ${movie.IMDB} <br>
          <b>Director:</b> ${movie.director} <br>
          <b>Actors:</b> ${movie.actors.filter(actor => {return actor}).join(", ")} <br>
          <b>Genres:</b> ${movie.genres.filter(genre => {return genre}).join(", ")} <br>
          <b>Description:</b> ${movie.description}
        </p>
      </div>
    `;
  });
  sek2.appendChild(moviesDiv);

  document.querySelectorAll(".divMovieDelete").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });
  });
});