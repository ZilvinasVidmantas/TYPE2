console.groupCollapsed(" --- task 1 --- ");
  // --- task 1
  let masyvas1 = [1,2,3,4,5,6,7,8,9,10];
  //              0 1 2 3 4 5 6 7 8 9
  function uzd1(masyvas, min){
    let foundIndex = masyvas.findIndex(number => number > min); 
    return foundIndex;
  }
  let uzd1Ats = uzd1(masyvas1, 6);
  console.log("Indeksas " + uzd1Ats);
console.groupEnd();