// task 1
console.groupCollapsed("--- task 1 ---")
  let masyvas1 = ["Labas", 1, 65, 87, 97, true, "tiesa", false, "melas", "not rlly", 54, 12, 68];
  for(let i = 0; i < masyvas1.length; i++){
    console.log(masyvas1[i]);
  }
console.groupEnd();

// task 2
console.groupCollapsed("--- task 2 ---")
  let masyvas2 = ["Labas", 1, 65, 87, 97, true, "tiesa", false, "melas", "not rlly", 54, 12, 68];
  for(let i = 0; i < masyvas1.length; i+=3){
    console.log(masyvas1[i]);
  }
console.groupEnd();

// task 3
console.groupCollapsed("--- task 3 ---")
  let masyvas3 = ["Labas", 1, 65, 87, 97, true, "tiesa", false, "melas", "not rlly", 54, 12, 68];
  function uzd3(kasKelintas, pateiktasMasyvas){
    for(let i = 0; i < pateiktasMasyvas.length; i+=kasKelintas){
      console.log(pateiktasMasyvas[i]);
    }
  }
  uzd3(5, masyvas3)
console.groupEnd();

// task 4
console.groupCollapsed("--- task 4 ---")
  let masyvas4 = ["Labas", 1, 65, 87, 97, true, "tiesa", false, "melas", "not rlly", 54, 12, 68];
  for(let i = 0; i < masyvas4.length; i++){
    if(masyvas4[i] > 54){
      console.log(masyvas4[i]);
    }
  }  
console.groupEnd();

// task 5
console.groupCollapsed("--- task 5 ---")
  let masyvas5 = [" Labas", 1, 65, 87, 97, true, "tiesa", false, "melas", "not rlly", 54, 12, 68, "ledai", "ruletė", "Lagaminas"];
  function uzd5(pateiktasMasyvas, nurodytaRaide){
    nurodytaRaide = nurodytaRaide.toLowerCase();
    for( let i = 0; i < pateiktasMasyvas.length; i++){
      if(typeof pateiktasMasyvas[i] == "string"){
        if(pateiktasMasyvas[i].trim().slice(0,1).toLowerCase() == nurodytaRaide){
          console.log(pateiktasMasyvas[i].trim());
        }
      }
    }
  }
  uzd5(masyvas5, "a");
console.groupEnd();

// task 6
console.groupCollapsed("--- task 6 ---")
  let masyvas6_number = [54,87,94,61,51,8,15,5,61,1,61,651,615,351,6,16,16,51,61,321,681,19,19,19,1,616,1,981,91,91,31,84,31,61];
  let masyvas6_string = ["Hello", "žiogas", "bye bye", "šuo", "zebra", "ledai", "funkcija", "katinas", "cat", "doggo", "avis", "kiaušinis", "slidinėti", "slidės", "pačiūžos", "riedlentė", "skate", "skittles", "Romeo and Joey"];
  console.log(masyvas6_number.sort(function(a,b){return a-b}));
  console.log(masyvas6_string.sort(function(a,b){return a.localeCompare(b)}));
console.groupEnd();

// task 7
console.groupCollapsed("--- task 7 ---")
  let masyvas7 = [54,87,94,61,51,8,15,5,61,1,61,651,615,351,6,16,16,51,61,321,681,19,19,19,1,616,1,981,91,91,31,84,31,61];
  function uzd7(duotasisMasyvas){
    let masyvasTikSuLyginiaisSkaiciais = [];
    for(let i = 0; i < duotasisMasyvas.length; i++){
      if(duotasisMasyvas[i] % 2 == 0){
        masyvasTikSuLyginiaisSkaiciais.push(duotasisMasyvas[i]);
      }
    }
    console.log(masyvasTikSuLyginiaisSkaiciais.sort(function(a,b){return a-b}).reverse());
  }
  uzd7(masyvas7);
console.groupEnd();

// extra 1.1
console.groupCollapsed("--- extra 1.1 ---")
  for (let i = 1; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
  }
console.groupEnd();

// extra 1.2
console.groupCollapsed("--- extra 1.2 ---")
  function extra1_2(intervaloPradzia, intervaloGalas){
    for (let i = intervaloPradzia; i <= intervaloGalas; i++) {
      let flag = 0;
      for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              flag = 1;
              break;
          }
      }
      if (i > 1 && flag == 0) {
          console.log(i);
      }
    }
  }
  extra1_2(16, 99);
console.groupEnd();

// extra 1.3
console.groupCollapsed("--- extra 1.3 ---")
  function extra1_3(skaicius){
    let isPrime = true;
    if (skaicius === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (skaicius > 1) {
      for (let i = 2; i < skaicius; i++) {
          if (skaicius % i == 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          console.log(`${skaicius} is a prime number`);
      } else {
          console.log(`${skaicius} is a not prime number`);
      }
    }
  }
  extra1_3(97);
console.groupEnd();