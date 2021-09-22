let masyvas = ["labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451];
console.log(masyvas);
masyvas.sort(function(pirmas,antras){return pirmas-antras});
masyvas.reverse();
console.log(masyvas);
//masyvas.splice(3, 3, "naujas", 5, 4, 6, ["PIRMAS", "antras"]);




// task 2
let naujasMasyvas = [1,2,3,4,5,6]
function u2(mas){
  for(let i = 0; i < mas.length; i++){
    console.log(mas[i]);
  }
}