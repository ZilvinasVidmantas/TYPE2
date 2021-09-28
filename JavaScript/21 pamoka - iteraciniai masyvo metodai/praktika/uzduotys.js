



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
console.log(numbers);


// --- task 4
let tekstas = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
function stringGenerator(string){
  let skiriamieji = [",", "?", " ", ".", ")", "(", "-", "i"];
  let masyvas = [];
  let startFlag = 0;
  let startFlagSet = false;
  let endFlag = 0;

  for(let i = 0; i < string.length; i++){
    let neSkiriamasis = true;
    for(let j = 0; j < skiriamieji.length; j++){
      if(string.charAt(i) === skiriamieji[j]){
        neSkiriamasis = false;
        if(startFlagSet === true){
          endFlag = i;
          masyvas.push(string.slice(startFlag, endFlag));
          startFlagSet = false;
        }
        break;
      }
    }
    if(neSkiriamasis === true && startFlagSet === false){
      startFlag = i;
      startFlagSet = true;
    }
  }
  return masyvas;
}
let masyvas = stringGenerator(tekstas);
console.log(masyvas);

//  --- task 8
console.groupCollapsed(" --- task 8 ---");
  function task8(masyvas, min, max){
    masyvas.forEach(number => {
      if(number > min && number < max){
        console.log(number);
      }
    });
  }
  task8(numbers, 50, 100);
console.groupEnd();