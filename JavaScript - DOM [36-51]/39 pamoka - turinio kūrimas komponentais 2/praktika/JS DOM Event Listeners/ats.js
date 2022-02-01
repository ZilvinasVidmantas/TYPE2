let text;
let title;
let paragraph;
let div;
let img;
let label;
let input;
let button;

//          1
const sek1 = document.querySelector("#section1");

title = document.createElement("h1");
text = document.createTextNode(data[0].title);
title.appendChild(text);
sek1.appendChild(title);

const mainCatImg = document.createElement("img");
mainCatImg.setAttribute("src", data[0].images[0]);
mainCatImg.setAttribute("style", `height:400px`);
sek1.appendChild(mainCatImg);

div = document.createElement("div");
div.setAttribute("id", "allCats");
data[0].images.forEach(image => {
  img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("style", `height:100px`);
  img.setAttribute("class", "catsImages");
  div.appendChild(img);
});
sek1.appendChild(div);

const allCats = document.querySelectorAll(".catsImages");
allCats.forEach(cat => {
  cat.addEventListener("click", (e) => {
    mainCatImg.src = e.target.src;
  });
});

//      2
const sek2 = document.querySelector("#section2");

title = document.createElement("h1");
text = document.createTextNode(data[1].title);
title.appendChild(text);
sek2.appendChild(title);

paragraph = document.createElement("p");
text = document.createTextNode(data[1].paragraph);
paragraph.appendChild(text);
sek2.appendChild(paragraph);

label = document.createElement("label");
text = document.createTextNode(data[1].label);
label.appendChild(text);
label.setAttribute("for","numberChoice");
sek2.appendChild(label);

input = document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("id","numberChoice");
input.setAttribute("name","numberChoice");
sek2.appendChild(input);

button = document.createElement("button");
text = document.createTextNode(data[1].button);
button.appendChild(text);
button.setAttribute("type","button");
button.setAttribute("id","fizzBuzzButton");
sek2.appendChild(button);

const fizzBuzzBtn = button;
let inputValue;
const bigDivForFizzBuzz = document.createElement("div");
fizzBuzzBtn.addEventListener("click", () => {
  bigDivForFizzBuzz.innerHTML = "";
  inputValue = document.querySelector("#numberChoice").value;
  for (let i = 1; i <= inputValue; i++) {
    div = document.createElement("div");
    div.setAttribute("style","display:inline-block; margin:3px");
    if (i % 15 === 0) {
      text = document.createTextNode("FizzBuzz");
    } else if (i % 5 === 0) {
      text = document.createTextNode("Buzz");
    } else if (i % 3 === 0) {
      text = document.createTextNode("Fizz");
    } else {
      text = document.createTextNode(i);
    }
    div.appendChild(text);
    bigDivForFizzBuzz.appendChild(div);
  }
  sek2.appendChild(bigDivForFizzBuzz);
});