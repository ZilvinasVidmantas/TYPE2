// --- task 9
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