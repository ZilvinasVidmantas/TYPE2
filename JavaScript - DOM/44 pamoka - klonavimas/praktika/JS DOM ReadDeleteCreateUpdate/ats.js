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
      <button class="listDeleteBtn" onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
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

const moviesDiv = document.createElement("div");
moviesDiv.setAttribute("id", "moviesDiv");
sek2.appendChild(moviesDiv);
document.querySelector("#generateMovies").addEventListener("click", () =>{
  moviesDiv.innerHTML = "";
  const moviesToGenerate = document.querySelector("#moviesList").children;
  moviesData[0].movies.forEach(movieInData => {
    for(let movieInList of moviesToGenerate){
      if(movieInData.id === movieInList.id){
        moviesDiv.innerHTML += `
        <div class="moviesDivs">
          <button class="divDeleteBtn" onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
          <button class="divEditBtn" onclick="editMe(event)">${moviesData[0].buttons[4]}</button>
          <h2> ${movieInData.movieName} </h2>
          <img src="${movieInData.poster}" width="160px" height="250px">
          <p> <b>Movie info:</b> <br> 
            <b>Length:</b> <span class="movieLength"> ${movieInData.length}</span> minutes <br>
            <b>Release Year:</b> <span class="movieYear"> ${movieInData.releaseYear}</span> <br>
            <b>IMDB score:</b> <span class="movieIMDB"> ${movieInData.IMDB}</span> <br>
            <b>Director:</b> <span class="movieDirector"> ${movieInData.director}</span> <br>
            <b>Actors:</b> <span class="movieActors"> ${movieInData.actors.filter(actor => {return actor}).join(", ")}</span> <br>
            <b>Genres:</b> <span class="movieGenres"> ${movieInData.genres.map(genre => {return genre}).join(", ")}</span> <br>
            <b>Description:</b> <span class="movieDescription"> ${movieInData.description}</span>
          </p>
        </div>
      `;
      }
    }
  });
});

const moviesDiv0 = document.createElement("div");
moviesDiv0.setAttribute("id", "moviesDiv0");
sek2.appendChild(moviesDiv0);
let modalBoxCreate;
document.querySelector("#createMovie").addEventListener("click", () =>{
  modalBoxCreate = document.createElement("div");
  modalBoxCreate.setAttribute("id", "modalBoxCreate");
  modalBoxCreate.innerHTML = `
    <button onclick="exitModal(event)"> ${moviesData[0].buttons[3]} </button>
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

function exitModal(e){
  deleteParent(e);
}
function submitCreateModal(e){
  let form = e.target.previousElementSibling;
  moviesDiv0.innerHTML += `
    <div class="moviesDivs">
      <button class="divDeleteBtn" onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
      <button class="divEditBtn" onclick="editMe(event)">${moviesData[0].buttons[4]}</button>
      <h2>${checkInput(form[0].value)}</h2>
      <img src="${checkInput(form[1].value)}" width="160px" height="250px">
      <p><b>Movie info:</b><br>
        <b>Length:</b> <span class="movieLength"> ${checkInput(form[4].value)}</span> minutes<br>
        <b>Release Year:</b> <span class="movieYear"> ${checkInput(document.querySelector("#createMovieYear").value)}</span> <br>
        <b>IMDB score:</b> <span class="movieIMDB"> ${checkInput(form[3].value)}</span><br>
        <b>Director:</b> <span class="movieDirector"> ${checkInput(form[5].value)}</span><br>
        <b>Actors:</b> <span class="movieActors">${checkInput(form[7].value)}</span><br>
        <b>Genres:</b> <span class="movieGenres"> ${checkInput(form[6].value)}</span><br>
        <b>Description:</b> <span class="movieDescription"> ${checkInput(form[8].value)}</span>
      </p>
    </div>
  `;
  deleteParent(e);
}

function editMe(e){
  let targetInfo = e.target.parentElement.children[4];  // nusirodyti target'ą - kur yra mūsų info (šiuo atveju paragrafas, nes jame beveik visa info)
  let name = targetInfo.parentElement.children[2].innerText; // arba grįžti į parent ir pasiimti children kazkelinta
  let imgSrc = targetInfo.previousElementSibling.src;  // arba pasirinkti kažkurį buvusi sibling'ą
  let movieLength = targetInfo.children[3].innerText; // pasirinkti kažkelintą vaikinį elementą
  let year = targetInfo.children[6].innerText;   // pasirinkti kažkelintą vaikinį elementą
  let imdb = targetInfo.querySelector(".movieIMDB").innerText; // pasirinkti jo viduje elementą su atitinkama klase/id/tag'u
  let director = targetInfo.querySelector(".movieDirector").innerText; // pasirinkti jo viduje elementą su atitinkama klase/id/tag'u
  let actors = targetInfo.querySelector(".movieActors").innerText; // pasirinkti jo viduje elementą su atitinkama klase/id/tag'u
  let genres = targetInfo.querySelector(".movieGenres").innerText; // pasirinkti jo viduje elementą su atitinkama klase/id/tag'u
  let description = targetInfo.querySelector(".movieDescription").innerText; // pasirinkti jo viduje elementą su atitinkama klase/id/tag'u

  let modalBoxEdit;
  modalBoxEdit = document.createElement("div");
  modalBoxEdit.setAttribute("id", "modalBoxEdit");
  modalBoxEdit.innerHTML = `
    <button onclick="exitModal(event)"> ${moviesData[0].buttons[3]} </button>
    <form>
      <label for="createMovieName">Name:</label> <input value="${name}" type="text" name="createMovieName" id="createMovieName"><br>
      <label for="createMoviePoster">Poster (url):</label> <input value="${imgSrc}" type="url" name="createMoviePoster" id="createMoviePoster"><br>
      <label for="createMovieYear">Release Year:</label> <input value="${year}" type="number" name="createMovieYear" id="createMovieYear"><br>
      <label for="createMovieIMDB">IMDB score:</label> <input value="${imdb}" type="number" name="createMovieIMDB" id="createMovieIMDB"><br>
      <label for="createMovieLength">Length (minutes):</label> <input value="${movieLength}" type="number" name="createMovieLength" id="createMovieLength"><br>
      <label for="createMovieDirector">Director:</label> <input value="${director}" type="text" name="createMovieDirector" id="createMovieDirector"><br>
      <label for="createMovieGenres">Genres:</label> <input value="${genres}" type="text" name="createMovieGenres" id="createMovieGenres" placeholder="Type1, Type2, Type3, ..."><br>
      <label for="createMovieActors">Actors:</label> <input value="${actors}" type="text" name="createMovieActors" id="createMovieActors" placeholder="Actor1, Actor2, Actor3, ..."><br>
      <label for="createMovieDesc">Description:</label> <textarea cols="40" rows="5" name="createMovieDesc" id="createMovieDesc">${description}</textarea>
    </form>
    <button onclick="submitEditModal(event)"> ${moviesData[0].buttons[5]} </button>
  `;
  e.target.parentElement.appendChild(modalBoxEdit);
}

function submitEditModal(e){
  let form = e.target.parentElement.children[1];
  e.target.parentElement.parentElement.innerHTML = `
      <button class="divDeleteBtn" onclick="deleteParent(event)">${moviesData[0].buttons[0]}</button>
      <button class="divEditBtn" onclick="editMe(event)">${moviesData[0].buttons[4]}</button>
      <h2>${checkInput(form[0].value)}</h2>
      <img src="${checkInput(form[1].value)}" width="160px" height="250px">
      <p><b>Movie info:</b><br>
        <b>Length:</b> <span class="movieLength"> ${checkInput(form[4].value)}</span> minutes<br>
        <b>Release Year:</b> <span class="movieYear"> ${checkInput(document.querySelector("#createMovieYear").value)}</span> <br>
        <b>IMDB score:</b> <span class="movieIMDB"> ${checkInput(form[3].value)}</span><br>
        <b>Director:</b> <span class="movieDirector"> ${checkInput(form[5].value)}</span><br>
        <b>Actors:</b> <span class="movieActors">${checkInput(form[7].value)}</span><br>
        <b>Genres:</b> <span class="movieGenres"> ${checkInput(form[6].value)}</span><br>
        <b>Description:</b> <span class="movieDescription"> ${checkInput(form[8].value)}</span>
      </p>
  `;
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

  <div style="display:none" id="spoiler" role="aria-hidden">
    <form action="javascript:void(0);" method="POST" id="saveEdit">
      <input type="text" id="editName">
      <input type="submit" value="Edit"> <a onclick="CloseInput()" aria-label="Close">&#10006;</a>
    </form>
  </div>

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
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
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

  this.Edit = function (item) {
    let el = document.getElementById('editName');
    el.value = this.countries[item];
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      let country = el.value;
      if (country) {
        self.countries.splice(item, 1, country.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Delete = function(item){
    this.countries.splice(item, 1);
    this.FetchAll();
  };
}
app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}