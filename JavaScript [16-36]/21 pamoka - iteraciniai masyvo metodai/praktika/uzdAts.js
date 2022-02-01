// --- task 3
console.groupCollapsed(" --- task 3 ---");
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
  let masyvas3 = numberArrayGenerator2000(100, 12, 368);
  console.log(masyvas3);
console.groupEnd();

// --- task 4
console.groupCollapsed(" --- task 4 --- ");
  let tekstas = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  function stringGenerator(string){
    let skiriamieji = [",", "?", " ", ".", ")", "(", "-", "'"];
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
  let masyvas4 = stringGenerator(tekstas);
  console.log(masyvas4);
console.groupEnd();

// --- task 5
console.groupCollapsed(" --- task 5 --- ");
  let masyvas5 = masyvas3
  .filter(item => item % 2 === 0);
  console.log(masyvas5);
console.groupEnd();

// --- task 6
console.groupCollapsed(" --- task 6 --- ");
  let masyvas6 = masyvas3
  .filter(item => item % 1 == 0)
  .filter(item => item % 2 !== 0)
  console.log(masyvas6);
console.groupEnd();

// --- task 7
console.groupCollapsed(" --- task 7 --- ");
  let masyvas7 = masyvas3
  .filter(item => item % 1 == 0)
  console.log(masyvas7);
console.groupEnd();

//  --- task 8
console.groupCollapsed(" --- task 8 --- ");
  function task8_1(masyvas, min, max){
    let masyvas8_1 = [];
    masyvas.forEach(number => {
      if(number > min && number < max){
        masyvas8_1.push(number);
      }
    });
    console.log(masyvas8_1);
  }
  task8_1(masyvas3, 50, 100);
  console.log(" ");
  function task8_2(masyvas, min, max){
    let masyvas8_2 = masyvas
    .filter(item => item > min)
    .filter(item => item < max);
    console.log(masyvas8_2);
  }
  task8_2(masyvas3, 50, 100);
console.groupEnd();

// --- task 9
console.groupCollapsed(" --- task 9 --- ");
  let masyvas9 = masyvas4
  .filter(item => item.charAt(0) !== item.charAt(0).toLowerCase());
  console.log(masyvas9);
console.groupEnd();

// --- task 10
console.groupCollapsed(" --- task 10 --- ");
  let masyvas10 = masyvas4
  .filter(item => item.charAt(0) !== item.charAt(0).toUpperCase());
  console.log(masyvas10);
console.groupEnd();

// --- task 11
console.groupCollapsed(" --- task 11 --- ");
  function filterWordStartBy(masyvas, letter){
    let arrayToGiveBack = [];
    arrayToGiveBack = masyvas
    .filter(item => item.charAt(0).toLowerCase() === letter || item.charAt(0).toUpperCase() === letter);
    return arrayToGiveBack;
  }
  let masyvas11 = filterWordStartBy(masyvas4, "B");
  console.log(masyvas11);
console.groupEnd();

// --- task 12
console.groupCollapsed(" --- task 12 --- ");
  function filterWordEndBy(masyvas, letter){
    let arrayToGiveBack = [];
    arrayToGiveBack = masyvas
    .filter(item => item.charAt(item.length-1).toLowerCase() === letter || item.charAt(item.length-1).toUpperCase() === letter);
    return arrayToGiveBack;
  }
  let masyvas12 = filterWordEndBy(masyvas4, "B");
  console.log(masyvas12);
console.groupEnd();

// --- task 13
console.groupCollapsed(" --- task 13 --- ");
  let masyvas13 = masyvas5
  .reduce((bendra, dabartine) => bendra + dabartine);
  console.log(masyvas13);
console.groupEnd();

// --- task 14
console.groupCollapsed(" --- task 14 --- ");
  let masyvas14 = masyvas6
  .reduce((bendra, dabartine) => bendra * dabartine);
  console.log(masyvas14);
console.groupEnd();