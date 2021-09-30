console.groupCollapsed(" --- task 1 ---");
  // --- task 1
  let masyvas1 = ["Labas", "ate", "apči"];
  function sujungti(duomenys){
    duomenys = duomenys.join(",");
    return duomenys;
  }
  let masyvasAts1 = sujungti(masyvas1);
  console.log(masyvasAts1);
console.groupEnd();

console.groupCollapsed(" --- task 2 ---");
  // --- task 2
  let number2 = 34064893621234;
  function shambles(data){
    let shambledNumbers = "";
    let currentNumber = 0;
    let nextNumber = 0;

    data = data.toString();
    for(let i = 0; i < data.length; i++){
      currentNumber = parseInt(data.charAt(i));
      nextNumber = parseInt(data.charAt(i+1));
      if(currentNumber % 2 !== 0){
        shambledNumbers = shambledNumbers.concat(currentNumber.toString());
      } else {
        if(nextNumber % 2 === 0){
          shambledNumbers = shambledNumbers.concat(currentNumber.toString());
          shambledNumbers = shambledNumbers.concat("-");
        } else {
          shambledNumbers = shambledNumbers.concat(currentNumber.toString());
        }
      }
    }
    return shambledNumbers;
  }
  let number2Ats = shambles(number2);
  console.log(number2Ats);
console.groupEnd();

console.groupCollapsed(" --- task 3 ---");
  // --- task 3
  let masyvas3 = [1,2,3,4,5,6,7,8,9];
  let placeholder;
  for(let i = 0; i < Math.floor(masyvas3.length/2); i++){
    placeholder = masyvas3[i];
    masyvas3[i] = masyvas3[masyvas3.length-1-i];
    masyvas3[masyvas3.length-1-i] = placeholder;
  }
  console.log(masyvas3);
console.groupEnd();

console.groupCollapsed(" --- task 4 ---");
  // --- task 4
  let masyvas4 = [1,4,5,6,4,8,4,5];
  function isrinktiNurodytus(data){
    console.log(arguments[1] + "" + arguments[2] + "" + arguments[3]);
    for(let i = 0; i < data.length; i++){
      for(let j = 1; j < arguments.length; j++){
        if(data[i] === arguments[j]){
          data.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return data;
  }
  let masyvas4Ats = isrinktiNurodytus(masyvas4, 4,6,8);
  console.log(masyvas4Ats);
console.groupEnd();

console.groupCollapsed(" --- task 5 ---");
  // --- task 5
  let masyvas5 = [654,84,16,651,84,61,61,981,91,61,61,1,9,1613,21];
  function bigAndSmall(duomenys){
    let didziausias = duomenys[0];
    let maziausias = duomenys[0];
    masyvas5.forEach(number => {
      if(number > didziausias){
        didziausias = number;
      }
      if(number < maziausias){
        maziausias = number;
      }
    });
    console.log("Didziausias - " + didziausias);
    console.log("Maziausias - " + maziausias);
  }
  bigAndSmall(masyvas5);
console.groupEnd();

console.groupCollapsed(" --- task 6 ---");
  // --- task 6
console.groupEnd();

console.groupCollapsed(" --- task 7 ---");
  // --- task7
  let duomenys = ["Labas", 5, true, false, 54, "ate"];
  let indeksai = [1,4,5,8];
  function takeChosenOnes(info, index){
    let grazint = [];
    index.forEach(number => {
      if(info[number] !== undefined){
        grazint.push(info[number]);
      } else {
        grazint.push("Duomenų masyve nebuvo " + number + " indekso.");
      }
    });
    return grazint;
  }
  let masyvas7Ats = takeChosenOnes(duomenys, indeksai);
  console.log(masyvas7Ats);
console.groupEnd();

console.groupCollapsed(" --- task 8 ---");
  // --- task 8
  let masyvas8=[1,4,5,6,1,5,4,5,1,5,4];
  let arUnikalus;
  for(let i = 0; i < masyvas8.length; i++){
    arUnikalus = true;
    for( let j = i+1; j < masyvas8.length; j++){
      if(masyvas8[i] == masyvas8[j]){
        // pop masyvas j
        arUnikalus = false;
      }
      if(arUnikalus){
        console.log(masyvas8[i]);
      }
    }
  }
console.groupEnd();

console.groupCollapsed(" --- task 9 ---");
  // --- task 9
  const masyvas9_1 = ['a', 'c'];
  const masyvas9_2 = ['b', 'c'];
  const masyvas9_3 = ['b', 'e', 'c'];
  const intersection = (...arrays) => {
    const result = arrays[0].filter((element) => {
      const indexOfElement = arrays[1].indexOf(element);
      if (indexOfElement >= 0) {
        return element;
      }
    });
    if (arrays.length > 2) {
      intersection(result, ...arrays.slice(2, arrays.length));
    }
    return Array.from(new Set(result));
  };
  let masyvas9Ats = intersection(masyvas9_1, masyvas9_2, masyvas9_3);
  console.log(masyvas9Ats);
console.groupEnd();

console.groupCollapsed(" --- task 10 ---");
  // --- task 10
  let masyvas10 = [12,54,1,65,78,91,45];
  function nThBiggest(data, index){
    data.sort(function(a,b){return b-a});
    return data[index-1];
  }
  let masyvas10Ats = nThBiggest(masyvas10, 3);
  console.log(masyvas10Ats);
console.groupEnd();