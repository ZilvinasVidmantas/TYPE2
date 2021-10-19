console.groupCollapsed("0");
  const pirmaSek1 = document.querySelector("#pirmas");
  const pirmaSek2 = document.getElementById("pirmas");
  console.log("query selector ID");
  console.log(pirmaSek1);
  console.log("get element by ID");
  console.log(pirmaSek2);

  const pirmasP1 = document.querySelector(".pirmasPar");
  const pirmasP2 = document.getElementsByClassName("pirmasPar");
  const pirmasP3 = document.querySelectorAll(".pirmasPar");
  console.log("query selector:");
  console.log(pirmasP1);
  console.log("get element by class:");
  console.log(pirmasP2);
  console.log("query selector all:");
  console.log(pirmasP3);

  const visiHeading = document.querySelectorAll(".header");
  console.log("Visi header su get elements by class name");
  console.log(visiHeading);
console.groupEnd();

console.groupCollapsed("1");
  //pirmasP1.innerHTML = "Nauja info.";
  pirmasP2[0].innerHTML = "Nauja info.";
console.groupEnd();

console.groupCollapsed("2");
  visiHeading[0].innerHTML = "Labas";
  pirmasP2[1].innerHTML = "Dar naujos info.";
console.groupEnd();

console.groupCollapsed("3");
  visiHeading[1].innerHTML = "Labas nauja info. Yay pavadinimaseikslėliai";
  const imagesDiv = document.querySelectorAll(".images");
  /*imagesDiv[0].innerHTML = `
    <img src="images/pirmas.jpg" height="100px">
    <img src="images/antras.PNG" height="100px">
    <img src="images/antras.PNG" height="100px">
  `;*/
  let imagesURL = [
    "images/pirmas.jpg",
    "images/pirmas.jpg",
    "images/antras.PNG"
  ];
  let html = "";
  imagesURL.forEach(img =>
    html += `<img src="${img}" height="100px"></img>`
  );
  imagesDiv[0].innerHTML = html;
console.groupEnd();

console.groupCollapsed("4");
  
console.groupEnd();

console.groupCollapsed("5");
const filmai = [
  {
    aktoriai: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwynth Paltrow', 'Leslie Bibb'],
    IMDB: 7.9,
    kainaNuomotisParai: 2,
    kainaPirkti: 12.5,
    leidimoMetai: 2008,
    pakuote: "diskas",
    pavadinimas: "IronMan",
    rezisierius: "Jon Favreau",
    tipas: ['Action', 'Adventure', 'Sci-Fi'],
    trukme: 126
  }, {
    aktoriai: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins', 'Stellan Skarsgard'],
    IMDB: 7,
    kainaNuomotisParai: 1.8,
    kainaPirkti: 15,
    leidimoMetai: 2011,
    pakuote: "diskas",
    pavadinimas: "Thor",
    rezisierius: "Kenneth Branagh",
    tipas: ['Action', 'Adventure', 'Fantasy'],
    trukme: 115
  }, {
    aktoriai: ['Sean Connery', 'Naseeruddin Shah', 'Peta Wilson', 'Tony Curran', 'Stuart Townsend'],
    IMDB: 5.8,
    kainaNuomotisParai: 2.2,
    kainaPirkti: 16.3,
    leidimoMetai: 2003,
    pakuote: "kasetė",
    pavadinimas: "The League of Extraordinary Gentlemen",
    rezisierius: "Stephen Norrington",
    tipas: ['Action', 'Adventure', 'Fantasy'],
    trukme: 110
  }, {
    aktoriai: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco', 'Cliff Robertson'],
    IMDB: 7.3,
    kainaNuomotisParai: 2.5,
    kainaPirkti: 12,
    leidimoMetai: 2002,
    pakuote: "diskas",
    pavadinimas: "SpiderMan",
    rezisierius: "Sam Raimi",
    tipas: ['Action', 'Adventure', 'Sci-Fi'],
    trukme: 121
  }, {
    aktoriai: ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Brianna Hildebrand'],
    IMDB: 8,
    kainaNuomotisParai: 2.1,
    kainaPirkti: 19.5,
    leidimoMetai: 2016,
    pakuote: "diskas",
    pavadinimas: "Deadpool",
    rezisierius: "Tim Miller",
    tipas: ['Action', 'Adventure', 'Comedy'],
    trukme: 108,
  }, {
    aktoriai: ['Hugh Jackman', 'Kate Beckinsale', 'Richard Roxburgh', 'David Wenham', 'Shuler Hensley'],
    IMDB: 6.1,
    kainaNuomotisParai: 2.1,
    kainaPirkti: 19.5,
    leidimoMetai: 2004,
    pakuote: "kasetė",
    pavadinimas: "Van Helsing",
    rezisierius: "Stephen Sommers",
    tipas: ['Action', 'Adventure', 'Fantasy'],
    trukme: 131
  }
]