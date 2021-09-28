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
  masyvas3[masyvas.length-1-i] = placeholder; // 1
}



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