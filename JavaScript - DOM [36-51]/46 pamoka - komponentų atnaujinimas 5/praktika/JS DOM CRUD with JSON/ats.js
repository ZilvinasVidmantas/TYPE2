const sek = document.querySelector("#section1");
let div;

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    sek.innerHTML = `
      <h1 class="cardsTitle"> ${data[0].title} </h1>
      <p class="cardsPar"> ${data[0].paragraph} </p>
      <button onclick="createCard()" id="createButton"> ${data[0].buttons[0]} </button>
      
      <div class="card-grid"></div>
    `;   

    const mainDiv = document.querySelector(".card-grid");

    data[0].cards.forEach(card => {
      div = document.createElement("div");
      div.setAttribute("class", "card");
      div.innerHTML = `
      <button onclick="deleteParent(event)" class="deleteCard"> ${data[0].buttons[4]} </button>
      <button onclick="editCard(event)" class="editCard"> ${data[0].buttons[2]} </button>
      <img src="${card.photo}">
      <div class="card-content">
        <h3 class="card-header"><span>${card.role}</span> <span>${card.race}</span></h3>
        <div class="status-grid">
          <div class="status"><span class="attack">${card.info.attack}</span></div>
          <div class="status"><span class="defense">${card.info.defense}</span></div>
          <div class="status"><span class="life">${card.info.hitPoints}</span></div>
          <div class="status"><span class="speed">${card.info.speed}</span></div>
        </div>
      </div>
      `;
      mainDiv.appendChild(div);
    });
  })
  .catch(err => console.log(err));


function createCard(){
  const createModalBox = document.createElement("div");
  createModalBox.setAttribute("id", "createModalBox");
  createModalBox.innerHTML = `
    <button onclick="deleteParent(event)"> Exit </button>
    <form>
      <label for="creatureRole"> Creature Role: </label> <input type="text" name="creatureRole" id="creatureRole" value="" placeholder="Vanguard or Ranger or..."> <br>
      <label for="creatureRace"> Creature Race: </label> <input type="text" name="creatureRace" id="creatureRace" value="" placeholder="Dwarf or Elf or Orc or..."> <br>
      <label for="creaturePhoto"> Creature Photo: </label> <input type="url" name="creaturePhoto" id="creaturePhoto" value="" placeholder="https://www.somePage.com/image.png"> <br>
      <label for="creatureAttack"> Creature Attack: </label> <input type="number" name="creatureAttack" id="creatureAttack" value="" placeholder="666">
      <label for="creatureDefense"> Creature Defense: </label> <input type="number" name="creatureDefense" id="creatureDefense" value="" placeholder="666"><br>
      <label for="creatureHitPoints"> Creature Hit Points: </label> <input type="number" name="creatureHitPoints" id="creatureHitPoints" value="" placeholder="666">
      <label for="creatureSpeed"> Creature Speed: </label> <input type="number" name="creatureSpeed" id="creatureSpeed" value="" placeholder="666">
    </form>
    <button onclick="submitCreation(event)"> Submit </button>
  `;
  sek.appendChild(createModalBox);
}

function submitCreation(e){
  const mainDiv = document.querySelector(".card-grid");
  let targeted = e.target.previousElementSibling;
  div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = submition(targeted);
  mainDiv.appendChild(div);
  deleteParent(e);
}

function submition(info){
  return `
    <button onclick="deleteParent(event)" class="deleteCard"> Delete </button>
    <button onclick="editCard(event)" class="editCard"> Edit </button>
    <img src="${validate(info[2].value)}">
    <div class="card-content">
      <h3 class="card-header"><span>${validate(info[0].value)}</span> <span>${validate(info[1].value)}</span></h3>
      <div class="status-grid">
        <div class="status"><span class="attack">${validate(info[3].value)}</span></div>
        <div class="status"><span class="defense">${validate(info[4].value)}</span></div>
        <div class="status"><span class="life">${validate(info[5].value)}</span></div>
        <div class="status"><span class="speed">${validate(info[6].value)}</span></div>
      </div>
    </div>
  `;
}

function editCard(e){
  let targeted = e.target.parentElement.children;
  let photo = targeted[2].src;
  let role = targeted[3].children[0].children[0].innerHTML;
  let race = targeted[3].children[0].children[1].innerHTML;
  let attack = targeted[3].querySelector(".attack").innerHTML; // gauname tą patį ką ir žemiau esančioje eilutėje.
  //let attack = targeted[3].children[1].children[0].children[0].innerHTML;
  let defense = targeted[3].children[1].children[1].children[0].innerHTML;
  let hitPoints = targeted[3].children[1].children[2].children[0].innerHTML;
  let speed = targeted[3].children[1].children[3].children[0].innerHTML;

  const editModalBox = document.createElement("div");
  editModalBox.setAttribute("id", "createModalBox");
  editModalBox.innerHTML = `
    <button onclick="deleteParent(event)"> Exit </button>
    <form>
      <label for="creatureRole"> Creature Role: </label> <input type="text" name="creatureRole" id="creatureRole" value="${role}" placeholder="Vanguard or Ranger or..."> <br>
      <label for="creatureRace"> Creature Race: </label> <input type="text" name="creatureRace" id="creatureRace" value="${race}" placeholder="Dwarf or Elf or Orc or..."> <br>
      <label for="creaturePhoto"> Creature Photo: </label> <input type="url" name="creaturePhoto" id="creaturePhoto" value="${photo}" placeholder="https://www.somePage.com/image.png"> <br>
      <label for="creatureAttack"> Creature Attack: </label> <input type="number" name="creatureAttack" id="creatureAttack" value="${attack}" placeholder="666">
      <label for="creatureDefense"> Creature Defense: </label> <input type="number" name="creatureDefense" id="creatureDefense" value="${defense}" placeholder="666"><br>
      <label for="creatureHitPoints"> Creature Hit Points: </label> <input type="number" name="creatureHitPoints" id="creatureHitPoints" value="${hitPoints}" placeholder="666">
      <label for="creatureSpeed"> Creature Speed: </label> <input type="number" name="creatureSpeed" id="creatureSpeed" value="${speed}" placeholder="666">
    </form>
    <button onclick="submitEdition(event)"> Submit </button>
  `;
  e.target.parentElement.appendChild(editModalBox);
}

function submitEdition(e){
  let targeted = e.target.previousElementSibling;
  
  e.target.parentElement.parentElement.innerHTML = submition(targeted);
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