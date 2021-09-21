let amzius = prompt("Laba diena, koks jūsų amžius?");
let teises;

if(amzius >= 18){
  console.log("Jūs esate pilnametis!");
  teises = prompt("Ar jau išsilaikęs mašinos teises?");
  if(teises == "Taip" || teises == "taip"){
    console.log("yay");
  } else {
    console.log("sad");
  }
  /*console.log(10+amzius);
  console.log("Po 10 metų jums būtų " + ( 10 + amzius ) + " metų.");*/
} else {
  console.log("Jūs nesate pilnametis.");
}

console.log(teises);