let title;
let paragraph;
let div;
let text;
let ul;
let li;
let img;
let button;
let form;
let input;

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
      <button onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
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

//      2
const sek2 = document.querySelector("#section2");

sek2.innerHTML += `
  <button id="generateMovies"> ${moviesData[0].buttons[1]} </button>
  <button id="createMovie"> ${moviesData[0].buttons[2]} </button>
`;

/*button = document.createElement("button");
button.setAttribute("id", "generateMovies");
text = document.createTextNode(moviesData[0].buttons[1]);
button.appendChild(text);
sek2.appendChild(button);

button = document.createElement("button");
button.setAttribute("id", "createMovie");
text = document.createTextNode(moviesData[0].buttons[2]);
button.appendChild(text);
sek2.appendChild(button);*/

const moviesDiv = document.createElement("div");
moviesDiv.setAttribute("id", "moviesDiv");
document.querySelector("#generateMovies").addEventListener("click", () =>{
  moviesDiv.innerHTML = "";
  const moviesToGenerate = document.querySelector("#moviesList").children;
  moviesData[0].movies.forEach(movieInData => {
    for(let movieInList of moviesToGenerate){
      if(movieInData.id === movieInList.id){
        moviesDiv.innerHTML += `
        <div>
          <button onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
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
      `;
      }
    }
  });
  sek2.appendChild(moviesDiv);
});

const moviesDiv0 = document.createElement("div");
moviesDiv0.setAttribute("id", "moviesDiv0");
let modalBoxCreate;
document.querySelector("#createMovie").addEventListener("click", () =>{
  modalBoxCreate = document.createElement("div");
  modalBoxCreate.setAttribute("id", "modalBoxCreate");
  modalBoxCreate.innerHTML = `
    <button onclick="exitCreateModal(event)"> ${moviesData[0].buttons[3]} </button>
    <form>
      <label for="createMovieName">Name:</label> <input type="text" name="createMovieName" id="createMovieName"><br>
      <label for="createMoviePoster">Poster (url):</label> <input type="url" name="createMoviePoster" id="createMoviePoster"><br>
      <label for="createMovieYear">Release Year:</label> <input type="number" name="createMovieYear" id="createMovieYear"><br>
      <label for="createMovieIMDB">IMDB score:</label> <input type="number" name="createMovieIMDB" id="createMovieIMDB"><br>
      <label for="createMovieLength">Length (minutes):</label> <input type="number" name="createMovieLength" id="createMovieLength"><br>
      <label for="createMovieDirector">Director:</label> <input type="text" name="createMovieDirector" id="createMovieDirector"><br>
      <label for="createMovieGenres">Genres:</label> <input type="text" name="createMovieGenres" id="createMovieGenres" placeholder="Type1, Type2, Type3, ..."><br>
      <label for="createMovieActors">Actors:</label> <input type="text" name="createMovieActors" id="createMovieActors" placeholder="Actor1, Actor2, Actor3, ..."><br>
      <label for="createMovieDesc">Description:</label> <textarea cols="40" rows="5" name="createMovieDesc" id="createMovieDesc"></textarea>
    </form>
    <button onclick="submitCreateModal(event)"> ${moviesData[0].buttons[2]} </button>
  `;
  sek2.appendChild(modalBoxCreate);
});

function exitCreateModal(e){
  deleteParent(e);
}
function submitCreateModal(e){
  let form = e.target.previousElementSibling;
  moviesDiv0.innerHTML += `
    <div>
      <button onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
      <h2> ${checkInput(form[0].value)} </h2>
      <img src="${checkInput(form[1].value)}" height="250px">
      <p> <b>Movie info:</b> <br> 
        <b>Length:</b> ${checkInput(form[4].value)} minutes <br>
        <b>Release Year:</b> ${checkInput(document.querySelector("#createMovieYear").value)} <br>
        <b>IMDB score:</b> ${checkInput(form[3].value)} <br>
        <b>Director:</b> ${checkInput(form[5].value)} <br>
        <b>Actors:</b> ${checkInput(form[7].value)} <br>
        <b>Genres:</b> ${checkInput(form[6].value)} <br>
        <b>Description:</b> ${checkInput(form[8].value)}
      </p>
    </div>
  `;
  sek2.appendChild(moviesDiv0);
  deleteParent(e);
}

function checkInput(value){
  if(value !== ""){
    return value;
  } else {
    return "No data";
  }
}

function deleteParent(e){
  e.target.parentElement.remove();
}
//        3


//        4 

const sek4 = document.querySelector("#section4");

sek4.innerHTML += `
  <form action="javascript:void(0)" onsubmit="app.Add()">
    <input type="text" id="addName" placeholder="New Country">
    <input type="submit" value="Add">
  </form>
  <p id="counter"></p>
  <table>
    <thead>
      <tr>
        <th> Name </th>
      </tr>
    </thead>
    <tbody id="countries"></tbody>
  </table>
`;

let app = new function(){
  this.el = document.getElementById('countries');
  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];
  
  this.Count = function(data){
    let el = document.getElementById('counter');
    let name = 'country';
    if(data){
      if(data > 1){
        name = 'countries';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function(){
    let data = '';
    if(this.countries.length > 0){
      for(i = 0; i < this.countries.length; i++){
        data += '<tr>';
        data += '<td>' + this.countries[i] + '</td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.countries.length);
    return this.el.innerHTML = data;
  };

  this.Add = function(){
    el = document.getElementById('addName');
    let country = el.value;

    if(country){
      this.countries.push(country.trim());
      el.value = '';
      this.FetchAll();
    }
  };

  this.Delete = function(item){
    this.countries.splice(item, 1);
    this.FetchAll();
  };
}
app.FetchAll();