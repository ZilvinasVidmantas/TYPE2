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
ul.setAttribute("id", "moviesList");
moviesData[0].movies.forEach(movie => {
  ul.innerHTML += `
    <li id="${movie.id}">
      ${movie.movieName} 
      <button class="listMovieDelete">${moviesData[0].buttons[0]}</button>
        <ul>
          <li> IMDB: ${movie.IMDB} </li>
          <li> Year: ${movie.releaseYear} </li>
          <li> Length: ${movie.length} minutes </li>
        </ul>
    </li>
  `;
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
moviesDiv.setAttribute("id", "moviesDiv");

document.querySelector("#generateMovies").addEventListener("click", () =>{
  moviesDiv.innerHTML = "";
  const moviesToGenerate = document.querySelector("#moviesList").children;
  console.log(moviesToGenerate);
  moviesData[0].movies.forEach(movieInData => {
    for(let movieInList of moviesToGenerate){
      if(movieInData.id === movieInList.id){
        moviesDiv.innerHTML += `
        <div>
          <button class="divMovieDelete">${moviesData[0].buttons[0]}</button>
          <h2> ${movieInData.movieName} </h2>
          <img src="${movieInData.poster}" height="250px">
          <p> <b>Movie info:</b> <br> 
            <b>Length:</b> ${movieInData.length} minutes <br>
            <b>Release Year:</b> ${movieInData.releaseYear} <br>
            <b>IMDB score:</b> ${movieInData.IMDB} <br>
            <b>Director:</b> ${movieInData.director} <br>
            <b>Actors:</b> ${movieInData.actors.filter(actor => {return actor}).join(", ")} <br>
            <b>Genres:</b> ${movieInData.genres.map(genre => {return genre}).join(", ")} <br>
            <b>Description:</b> ${movieInData.description}
          </p>
        </div>
      `
      }
    }
  });
  sek2.appendChild(moviesDiv);

  document.querySelectorAll(".divMovieDelete").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });
  });
});