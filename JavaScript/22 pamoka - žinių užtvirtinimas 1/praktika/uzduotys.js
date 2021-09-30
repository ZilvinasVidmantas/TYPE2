console.groupCollapsed(" --- task 1 ---");
  // --- task 1
  let masyvas1 = ["Labas", "ate", "apči"];
  function sujungti(duomenys){
    console.log("masyvo duomenys:");
    console.log(duomenys);
    // duomenys = duomenys.toString();
    // duomenys = duomenys.join();
    duomenys = duomenys.join(",");
    console.log("masyvas paverstas į string:");
    console.log(duomenys);

    return duomenys;
  }
  let masyvas1Ats = sujungti(masyvas1);
console.groupEnd();

console.groupCollapsed(" --- task 2 ---");
  // --- task 2
  let number2 = 1064523344;
  //           10-6-45234-4
  function shambles(data){
    let shambledNumbers = "";
    let currentNumber = 0;
    let nextNumber = 0;

    data = data.toString();
    for(let i = 0; i < data.length; i++){
      currentNumber = parseInt(data.charAt(i));
      nextNumber = parseInt(data.charAt(i+1));
      if(currentNumber % 2 !== 0){ // current nelyginis
        shambledNumbers = shambledNumbers.concat(currentNumber.toString());
      } else { // current lyginis
        if( nextNumber % 2 === 0 ){ // next lyginis
          shambledNumbers = shambledNumbers.concat(currentNumber.toString());
          shambledNumbers = shambledNumbers.concat("-");
        } else { // next nelyginis
          shambledNumbers = shambledNumbers.concat(currentNumber.toString());
        }
      }
    }
    console.log("shambledNumbers: " + shambledNumbers);

    /*data = data.toString();
    currentNumber = parseInt(data.charAt(0));
    // nelyginis
    shambledNumbers = shambledNumbers.concat(currentNumber.toString());

    currentNumber = parseInt(data.charAt(1));
    nextNumber = parseInt(data.charAt(2));
    // lyginis
    shambledNumbers = shambledNumbers.concat(currentNumber.toString());
    shambledNumbers = shambledNumbers.concat("-");

    currentNumber = parseInt(data.charAt(2));
    nextNumber = parseInt(data.charAt(3));
    // lyginis
    shambledNumbers = shambledNumbers.concat(currentNumber.toString());
    shambledNumbers = shambledNumbers.concat("-");

    currentNumber = parseInt(data.charAt(3));
    nextNumber = parseInt(data.charAt(4));

    console.log(shambledNumbers);
    */



  }
  shambles(number2);
console.groupEnd();

console.groupCollapsed(" --- task 3 ---");
  // --- task 3
  let masyvas3 = [1,2,3,4,5,6,7,8,9];
  console.log([1,2,3,4,5,6,7,8,9].reverse());
  //           0 1 2 3 4 5 6 7 8
  //           ^               ^
  //           9 2 3 4 5 6 7 8 1
  //             ^           ^
  //           9 8 3 4 5 6 7 2 1
  //               ^       ^
  //
  let placeholder;
  for(let i = 0; i < Math.floor(masyvas3.length/2); i++){
    placeholder = masyvas3[i]; // 1
    masyvas3[i] = masyvas3[masyvas3.length-1-i]; // 9
    masyvas3[masyvas3.length-1-i] = placeholder; // 1
  }
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
        console.log("mid did: " + didziausias);
      }
      if(number < maziausias){
        maziausias = number;
        console.log("mid maz: " + maziausias);
      }
    });
    console.log("Didžiausias: " + didziausias);
    console.log("Mažiausias: " + maziausias);
  }
  bigAndSmall(masyvas5);
console.groupEnd();

console.groupCollapsed(" --- task 7 ---");
  // --- task7
  let duomenys = ["Labas", 5, true, false, 54, "ate"];
  let indeksai = [1,4,5];
  // 5 54 "ate"
  function takeChosenOnes(info, index){
    let grazint = [];
    /*for(let i = 0; i < index.length; i++){
      grazint.push(info[index[i]]);
    }*/
    index.forEach(number => grazint.push(info[number]));
    return grazint;
  }
  let masyvasAts7 = takeChosenOnes(duomenys, indeksai);
  console.log(masyvasAts7);
console.groupEnd();

console.groupCollapsed(" --- task 8 ---");
  // --- task 8
  let masyvas8=[1,4,5,6,1,5,4,5,1,5,4];
  //            0 1 2 3 4 5 6 7 8 9 10
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

console.groupCollapsed(" --- task 10 ---");
  // --- task 10
  let masyvas10 = [12,54,1,65,78,91,45];
  function nThBiggest(data, index){
    data.sort(function(a,b){return b-a});
    console.log(data[index-1]);
  }
  nThBiggest(masyvas10, 3);
console.groupEnd();