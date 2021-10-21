//    1

const sek1 = document.querySelector("#section1");
/*sek1.innerHTML = `<h1> ${data[0].title} </h1>`;
sek1.innerHTML += `<p> ${data[0].paragraph} </p>`;
sek1.innerHTML += `<img src="${data[0].image}">`;*/

const title1 = document.createElement("h1");
const par1 = document.createElement("p");
const img1 = document.createElement("img");
let text = document.createTextNode(data[0].title);
title1.appendChild(text);
text = document.createTextNode(data[0].paragraph);
par1.appendChild(text);
img1.setAttribute("src", data[0].image);
img1.setAttribute("style", "height:300px");
sek1.appendChild(title1);
sek1.appendChild(par1);
sek1.appendChild(img1);

//---------------------------------------------------------------
//    2
const sek2 = document.querySelector("#section2");
/*let html = "";
html = `<h1> ${data[1].title} </h1>`;
html += "<div>";
data[1].images.forEach(img =>{
  html += `<img src="${img}" style="height:300px">`;
})
//html += `<img src="${data[1].images[0]}" style="height:300px">`;
//html += `<img src="${data[1].images[1]}" style="height:300px">`;
//html += `<img src="${data[1].images[2]}" style="height:300px">`;
html += `</div>`;
sek2.innerHTML = html;*/

const title2 = document.createElement("h1");
text = document.createTextNode(data[1].title);
title2.appendChild(text);
sek2.appendChild(title2);
const div2 = document.createElement("div");
let img2;
data[1].images.forEach(img => {
  img2 = document.createElement("img");
  img2.setAttribute("src", img);
  img2.setAttribute("style", "height:300px; padding: 0 5px");
  div2.appendChild(img2);
});
sek2.appendChild(div2);

/*img2 = document.createElement("img");
img2.setAttribute("src", data[1].images[0]);
img2.setAttribute("style", "height:300px");
sek2.appendChild(img2);

img2 = document.createElement("img");
img2.setAttribute("src", data[1].images[1]);
img2.setAttribute("style", "height:300px");
sek2.appendChild(img2);

img2 = document.createElement("img");
img2.setAttribute("src", data[1].images[2]);
img2.setAttribute("style", "height:300px");
sek2.appendChild(img2);*/

//---------------------------------------------------------------
//        3
const sek3 = document.querySelector("#section3");
/*let html = "";
html = `<h1> ${data[2].title} </h1>`;
html += "<div>";
for(let i = 0; i < data[2].imagesTitles.length; i++){
  html += `<div>`;
  html += `<h3> ${data[2].imagesTitles[i]} </h3>`;
  html += `<img src="${data[2].images[i]}" style="height:300px; padding:0 5px">`;
  html += `<p> ${data[2].paragraphs[i]} </p>`;
  html += `</div>`;
}
html += `</div>`;
sek3.innerHTML = html;*/

const title3 = document.createElement("h1");
text = document.createTextNode(data[2].title);
title3.appendChild(text);
sek3.appendChild(title3);
const bigDiv3 = document.createElement("div");
let div3;
let img3;
let imgTitle3;
let imgPar3;
for(let i = 0; i < data[2].imagesTitles.length; i++){
  div3 = document.createElement("div");

  imgTitle3 = document.createElement("h3");
  text = document.createTextNode(data[2].imagesTitles[i]);
  imgTitle3.appendChild(text);
  div3.appendChild(imgTitle3);

  img3 = document.createElement("img");
  img3.setAttribute("src", data[2].images[i]);
  img3.setAttribute("style", "height:300px; padding: 0 5px");
  div3.appendChild(img3);

  imgPar3 = document.createElement("p");
  text = document.createTextNode(data[2].paragraphs[i]);
  imgPar3.appendChild(text);
  div3.appendChild(imgPar3);

  bigDiv3.appendChild(div3);
};
sek3.appendChild(bigDiv3);