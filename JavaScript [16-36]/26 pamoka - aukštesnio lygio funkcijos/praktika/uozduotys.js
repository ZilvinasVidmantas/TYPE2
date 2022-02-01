let masyvas1 = [65,465,16,16,1,61,61,61,31,320,61,613];

// 1.3

function uzduotis1_3(masyvas, min, max, lygNelyg){
  let masyvasToReturn = [];
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] < max && masyvas[i] > min){
      if(lygNelyg === true && masyvas[i] % 2 === 0){
        masyvasToReturn.push(masyvas[i]);
      } else if(lygNelyg === false && masyvas[i] % 2 !== 0){
        masyvasToReturn.push(masyvas[i]);
      }
    }
  }
  return masyvasToReturn;
}

let ats1_3 = uzduotis1_3(masyvas1, 25, 500, false);
console.log(ats1_3);

// 1.4
let uzduotis1_4_3 = (masyvas, min, max, lygNelyg) => {
  let masyvasToReturn = masyvas
    .filter(data => data > min)
    .filter(data => data < max);
  if(lygNelyg === true){
    masyvasToReturn = masyvasToReturn.filter(data => data % 2 === 0);
  } else {
    masyvasToReturn = masyvasToReturn.filter(data => data % 2 !== 0);
  }
  return masyvasToReturn;
}

let ats1_4_3 = uzduotis1_4_3(masyvas1, 25, 500, false);
console.log(ats1_4_3);