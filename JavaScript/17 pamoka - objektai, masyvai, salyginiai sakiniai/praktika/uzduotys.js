/*let amzius = prompt("Laba diena, koks jūsų amžius?");

if(amzius >= 18){
  console.log("Jūs esate pilnametis!");
  let teises = prompt("Ar jau išsilaikęs automobilio teises? (taip/ne)");
  if(teises == "Taip" || teises == "taip"){
    console.log("Jūs jau turite automobilio teises.");
    let automobilis = prompt("Ar turite automobilį? (taip/ne)");
    if(automobilis == "Taip" || automobilis == "taip"){

    } else if(automobilis == "Ne" || automobilis == "ne"){

    } else {
      console.log("Atsakymas turėjo būti 'taip' arba 'ne'. Prašome pateikti atsakymą per naują.");
    }
  } else if (teises == "Ne" || teises == "ne") {
    console.log("Reikia išsilaikyti automobilio teises, kad galėtum jį vairuoti.");
  } else {
    console.log("Atsakymas turėjo būti 'taip' arba 'ne'. Prašome pateikti atsakymą per naują.");
  }*/
  /*console.log(10+amzius);
  console.log("Po 10 metų jums būtų " + ( 10 + amzius ) + " metų.");*/
/*} else {
  console.log("Jūs nesate pilnametis. Negalite vairuoti automobilio.");
}*/

let metuLaikas = prompt("Koks dabar metų laikas?");
metuLaikas = metuLaikas.toLocaleLowerCase();
switch (metuLaikas){
  case "ruduo" :
    console.log("Ruduo yra gražus metų laikas. Visi medžiai meta savo spalvotus lapus.");
    break;
  case "žiema" :
    console.log(metuLaikas + " šalta.");
    break;
  case "vasara" :
    console.log(metuLaikas + " karšta.");
    break;
  case "pavasaris" :
    console.log(metuLaikas + " viskas žydi.");
    break;
  default:
    console.log("error");
}



