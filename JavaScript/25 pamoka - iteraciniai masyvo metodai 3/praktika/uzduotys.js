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

console.groupCollapsed(" --- task 6 --- ");
  // --- task 6
  let masyvas6 = ["Labas", "ate", "zodziautis","hmm","Labaaaai"];

  const uzd6 = (masyvas, start, min, max) => 
    masyvas.findIndex(data =>
      start
      ? data.charAt(0) === data.charAt(0).toUpperCase() && data.length > min && data.length < max
      : data.charAt(0).toLowerCase() && data.length > min && data.length < max
    );

  let uzd6Ats = uzd6(masyvas6, true, 5, 11);
  console.log(uzd6Ats);
console.groupEnd();

