



// --- task 3

function numberArrayGenerator2000(arrayLength, minimum, maximum){
  let masyvasToReturn = [];
  for(var i = 0; i < arrayLength; i++){
    let generatedNumber = Math.random()*maximum;
    while(generatedNumber < minimum){
      generatedNumber = Math.random()*maximum;
    }
    if( Math.floor(Math.random()*2) == 1 ){
      generatedNumber = Math.floor(generatedNumber);
    }
    masyvasToReturn.push(generatedNumber);
  }
  return masyvasToReturn;
}

let numbers = numberArrayGenerator2000(100, 12, 368);


// --- task 4
let string = "Labas, kaip sekasi?";



let masyvas = stringGenerator(string);

// masyvas = ["Labas", "kaip", "sekasi"];