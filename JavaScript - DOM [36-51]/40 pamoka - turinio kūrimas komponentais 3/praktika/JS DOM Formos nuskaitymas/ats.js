let title;
let paragraph;
let div;
let text;
let img;
let input;
let option;
let form;
let button;
let radoMenoDirbini;

//    1
const sek1 = document.querySelector("#section1");

title = document.createElement("h1");
text = document.createTextNode(data[0].title);
title.appendChild(text);
sek1.appendChild(title);

form = document.createElement("form");
input = document.createElement("input");
input.setAttribute("id", "artWorkInput");
input.setAttribute("placeholder", data[0].inputPlaceholder);
form.appendChild(input);
button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id", "searchArtWorkButton");
text = document.createTextNode(data[0].button);
button.appendChild(text);
form.appendChild(button);
sek1.appendChild(form);

const paintingDiv = document.createElement("div");
document.querySelector("#searchArtWorkButton").addEventListener("click", () => {
  paintingDiv.innerHTML = "";
  radoMenoDirbini = false;
  data[0].imagesTitles.some((paintingTitle, i) => {
    let found = paintingTitle.toLowerCase().includes(input.value.toLowerCase().trim());
    if (found) {
      radoMenoDirbini = true;
      title = document.createElement("h3");
      text = document.createTextNode(data[0].imagesTitles[i]);
      title.appendChild(text);
      paintingDiv.appendChild(title);
      img = document.createElement("img");
      img.setAttribute("src", data[0].images[i]);
      img.setAttribute("style", "height: 250px; margin: 5px");
      paintingDiv.appendChild(img);
      paragraph = document.createElement("p");
      text = document.createTextNode(data[0].paragraphs[i]);
      paragraph.appendChild(text);
      paintingDiv.appendChild(paragraph);
      sek1.appendChild(paintingDiv);
    }
    return found;
  });
  if (radoMenoDirbini === false) {
    paragraph = document.createElement("p");
    text = document.createTextNode(data[0].errorMessage);
    paragraph.appendChild(text);
    paintingDiv.appendChild(paragraph);
    sek1.appendChild(paintingDiv);
  }
});

//          2
const sek2 = document.querySelector("#section2");

title = document.createElement("h1");
text = document.createTextNode(data[1].title);
title.appendChild(text);
sek2.appendChild(title);

form = document.createElement("form");
input = document.createElement("input");
input.setAttribute("id", "calculatorInput1");
input.setAttribute("type", "number");
input.setAttribute("placeholder", data[1].inputPlaceholder[0]);
form.appendChild(input);

const selectCalc = document.createElement("select");
selectCalc.setAttribute("id", "calculatorSelector");
data[1].selector.forEach(mathOption =>{
  option = document.createElement("option");
  text = document.createTextNode(mathOption);
  option.appendChild(text);
  option.setAttribute("value", mathOption);
  selectCalc.appendChild(option);
  // kitas būdas
  /*option = document.createElement("option");
  option.value = mathOption;
  option.text = mathOption;
  selectCalc.add(option, null);*/
});
form.appendChild(selectCalc);

input = document.createElement("input");
input.setAttribute("id", "calculatorInput2");
input.setAttribute("type", "number");
input.setAttribute("placeholder", data[1].inputPlaceholder[1]);
form.appendChild(input);

button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id", "calculatorButton");
text = document.createTextNode(data[1].button);
button.appendChild(text);
form.appendChild(button);

sek2.appendChild(form);

paragraph = document.createElement("p");
paragraph.setAttribute("id", "calculatorOutput");
sek2.appendChild(paragraph);