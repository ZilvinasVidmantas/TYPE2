const sek = document.querySelector("#animalSection");
let div;
sek.innerHTML = `
  <h1 class="animalsTitle"> ${animals[0].title} </h1>
  <p class="animalsPar"> ${animals[0].paragraph} </p>
  <button id="createButton"> ${animals[0].buttons[0]} </button>
  
  <div id="mainAnimalsDiv"></div>
`;

const createAnimalButton = document.querySelector("#createButton");
const mainDiv = document.querySelector("#mainAnimalsDiv");

animals[0].animals.forEach(animal => {
  div = document.createElement("div");
  div.setAttribute("class", "separateAnimal");
  div.innerHTML = `
    <button onclick="deleteParent(event)"> ${animals[0].buttons[4]} </button>
    <button onclick="editAnimal(event)"> ${animals[0].buttons[2]} </button>
    <h2> <span>${animal.animal}</span> - <span>${animal.breed}</span> </h2>
    <img src="${animal.photo}">
    <p> ${animal.info} </p>
  `;
  mainDiv.appendChild(div);
});

const createModalBox = document.createElement("div");
createModalBox.setAttribute("id", "createModalBox");
createAnimalButton.addEventListener("click", () =>{
  createModalBox.innerHTML = `
    <button onclick="deleteParent(event)"> ${animals[0].buttons[1]} </button>
    <form>
      <label for="animalType"> Animal Type: </label> <input type="text" name="animalType" id="animalType" value="" placeholder="Monkey or Cat or..."> <br>
      <label for="animalBreed"> Animal Breed: </label> <input type="text" name="animalBreed" id="animalBreed" value="" placeholder="Makaka or Russian or..."> <br>
      <label for="animalPhoto"> Animal Photo: </label> <input type="url" name="animalPhoto" id="animalPhoto" value="" placeholder="https://www.somePage.com/image.png"> <br>
      <label for="animalInfo"> Animal Description: </label> <textarea rows="4" cols="40" name="animalInfo" id="animalInfo" placeholder="This monkey/cat is amazing and so on..."></textarea>
    </form>
    <button onclick="submitCreation(event)"> ${animals[0].buttons[3]} </button>
  `;
  sek.appendChild(createModalBox);
});

function submitCreation(e){
  let targeted = e.target.previousElementSibling;
  div = document.createElement("div");
  div.setAttribute("class", "separateAnimal");
  div.innerHTML = `
    <button onclick="deleteParent(event)"> ${animals[0].buttons[4]} </button>
    <button onclick="editAnimal(event)"> ${animals[0].buttons[2]} </button>
    <h2> <span>${validate(targeted[0].value)}</span> - <span>${validate(targeted[1].value)}</span> </h2>
    <img src='${validate(targeted[2].value)}'>
    <p> ${validate(targeted[3].value)} </p>
  `;
  mainDiv.appendChild(div);
  deleteParent(e);
}

const editModalBox = document.createElement("div");
editModalBox.setAttribute("id", "editModalBox");
function editAnimal(e){
  let targeted = e.target.parentElement.children;
  
  let animal = targeted[2].children[0].innerText;
  let breed = targeted[2].children[1].innerText;
  let photo = targeted[3].src;
  let description = targeted[4].innerText;
  
  editModalBox.innerHTML = `
    <button onclick="deleteParent(event)"> ${animals[0].buttons[1]} </button>
    <form>
      <label for="animalType"> Animal Type: </label> <input type="text" name="animalType" id="animalType" value="${animal}" placeholder="Monkey or Cat or..."> <br>
      <label for="animalBreed"> Animal Breed: </label> <input type="text" name="animalBreed" id="animalBreed" value="${breed}" placeholder="Makaka or Russian or..."> <br>
      <label for="animalPhoto"> Animal Photo: </label> <input type="url" name="animalPhoto" id="animalPhoto" value="${photo}" placeholder="https://www.somePage.com/image.png"> <br>
      <label for="animalInfo"> Animal Description: </label> <textarea rows="4" cols="40" name="animalInfo" id="animalInfo" placeholder="This monkey/cat is amazing and so on...">${description}</textarea>
    </form>
    <button onclick="submitEdition(event)"> ${animals[0].buttons[3]} </button>
  `;
  e.target.parentElement.appendChild(editModalBox);
}

function submitEdition(e){
  let targeted = e.target.parentElement.children[1];

  e.target.parentElement.parentElement.innerHTML = `
    <button onclick="deleteParent(event)"> ${animals[0].buttons[4]} </button>
    <button onclick="editAnimal(event)"> ${animals[0].buttons[2]} </button>
    <h2> <span>${validate(targeted[0].value)}</span> - <span>${validate(targeted[1].value)}</span> </h2>
    <img src='${validate(targeted[2].value)}'>
    <p> ${validate(targeted[3].value)} </p>
  `;
  deleteParent(e);
}

function deleteParent(e){
  e.target.parentElement.remove();
}

function validate(info){
  if(info !== ""){
    return info;
  } else if(info === ""){
    return "No data";
  }
}