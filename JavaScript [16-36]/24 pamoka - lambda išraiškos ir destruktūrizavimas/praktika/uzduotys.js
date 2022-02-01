// --- task 9
console.groupCollapsed(" --- task9 ---");
let masyvas9 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

function kasKelintas_0(masyvas, kas){
  for(let i = kas-1; i <= masyvas.length; i++){
    if(i % kas === 0){
      console.log(masyvas[i-1]);
    }
  }
}
kasKelintas_0(masyvas9, 5);
// ^ kaip rašytume paprastai

console.log(" ");

let kasKelintas_1 = (masyvas, kas) => {
  for(let i = kas-1; i <= masyvas.length; i++){
    if(i % kas === 0){
      console.log(masyvas[i-1]);
    }
  }
}
kasKelintas_1(masyvas9, 5);
// ^ lambda be metodų
console.log(" ");

let kasKelintas_2 = (masyvas, kas) => {
  masyvas
  .filter((data, index) => (index+(kas+1)) % kas == 0)
  .forEach(data => console.log(data));
}
kasKelintas_2(masyvas9, 5);
// ^ lambda su metodais
console.groupEnd();

// --- task 19
/*
  let masyvas19 = ["labas", "ate", 4, 6, 8, 9, 4, "viskas"];
  funkcijosVardas(masyvas, minimum)
  let masyvas19Ats = funkcijosVardas(masyvas19, 5);
  // ats: [6,8,9]
*/

// --- task 20
/*
  let masyvas20 = ["labas", "ate", 4, 6, 8, 9, 4, "viskas", 11];
  funkcijosVardas(masyvas, minimum, maximum, lygArNe)
  let masyvas20Ats = funkcijosVardas(masyvas19, 5, 10, true);
  // ats: [6,8]
*/

console.groupCollapsed(" --- task 23 ---");
  // --- task 23
  let [a, b] = [10, 20];
  console.log("a = " + a);
  console.log("b = " + b);
console.groupEnd();


console.groupCollapsed(" --- task 24 ---");
  // --- task 24
  let [a1, b1, c, d, e, f, g, h, j, k] =
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   console.log(a1,b1,c,d,e,f,g,h,j,k);
console.groupEnd();

console.groupCollapsed(" --- task 25 ---");
  // --- task 25
  let [a25, b25, ...likusios25] =
  [30, 35, 45, 654, 65];
  console.log(a25);
  console.log(b25);
  console.log(likusios25);
console.groupEnd();

console.groupCollapsed(" --- task 26 ---");
  // --- task 26
  let [,,, ...visos26] =
  [30, 35, 45, 654, 65];
  console.log(visos26);
console.groupEnd();

console.groupCollapsed(" --- task 27 ---");
  // --- task 27
  let [,,pirmas27,,,,antras27, ...likusios27] =
  [30, 35, 45, 654, 65, 54, 98, 87, 12, 32];
  console.log(pirmas27); // 45
  console.log(antras27); // 98
  console.log(likusios27); // [87,12,32]
console.groupEnd();

console.groupCollapsed(" --- task 29 ---");
  // --- task 29
  let objektas = {pirma:1, antra:2, trecia:3};
  let [pirmas29, antras29, trecias29] = 
   [5, objektas.antra, objektas.trecia];
  console.log(pirmas29, antras29, trecias29);
console.groupEnd();

console.groupCollapsed(" --- task 31 ---");
  // --- task 31
  let objektas31 = {
    vardas : "Rokas",
    miestas : "Kaunas",
    amzius : 25
  }

console.groupEnd();