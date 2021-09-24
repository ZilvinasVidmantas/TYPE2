// task 5
console.groupCollapsed("--- task 5 ---")
  
  let masyvas5 = ["     Labas", 1, 65, 87, 97, true, "tiesa", false, "melas", "not rlly", 54, 12, 68, "ledai", "ruletė", "Lagaminas"];
  function uzd5(pateiktasMasyvas, nurodytaRaide){
    let nurodytaRaideMazoji = nurodytaRaide.toLowerCase().trim().charAt(0);
    for(let i = 0; i < pateiktasMasyvas.length; i++){
      if(typeof pateiktasMasyvas[i] == "string"){
        let pateiktoMasyvoElementoPirmojiRaide = pateiktasMasyvas[i].trim().charAt(0).toLowerCase();
        if(pateiktoMasyvoElementoPirmojiRaide == nurodytaRaideMazoji){ // charAt(0) == slice(0,1)
          console.log(pateiktasMasyvas[i].trim());
        }
      }
    }
  }
  uzd5(masyvas5, "l");

console.groupEnd();

// task 6
console.groupCollapsed("--- task 6 ---")
  let masyvas6_number = [54,87,94,61,51,8,15,5,61,1,61,651,615,351,6,16,16,51,61,321,681,19,19,19,1,616,1,981,91,91,31,84,31,61];
  let masyvas6_string = ["Hello", "žiogas", "bye bye", "šuo", "čiaudulys", "zebra", "ledai", "funkcija", "katinas", "cat", "doggo", "avis", "kiaušinis", "slidinėti", "slidės", "pačiūžos", "riedlentė", "skate", "skittles", "Romeo and Joey"];
  console.log(masyvas6_number.sort(function(a,b){return a-b}));
  console.log(masyvas6_string.sort(function(a,b){return a.localeCompare(b)}));
console.groupEnd();

// task 7
console.groupCollapsed("--- task 7 ---")
  let masyvas7 = [54,87,94,61,51,8,15,5,61,1,61,651,615,351,6,16,16,51,61,321,681,19,19,19,1,616,1,981,91,91,31,84,31,61];
  function uzd7(pateiktasMasyvas){
    //let lyginiuSkaiciuMasyvas = [];
    pateiktasMasyvas.sort(function(a,b){return b-a});
    for(let i = 0; i < pateiktasMasyvas.length; i++){
      if(pateiktasMasyvas[i] % 2 == 0){
       // lyginiuSkaiciuMasyvas.push(pateiktasMasyvas[i]);
       console.log(pateiktasMasyvas[i]);
      }
    }
    //console.log(lyginiuSkaiciuMasyvas);
    //lyginiuSkaiciuMasyvas.sort(function(a,b){return a-b}).reverse();
    //lyginiuSkaiciuMasyvas.sort(function(a,b){return b-a});
    //console.log(lyginiuSkaiciuMasyvas);
  }
  uzd7(masyvas7);
console.groupEnd();

// extra 1.1
console.groupCollapsed("--- extra 1.1 ---")
  for (let i = 1; i <= 100; i++) {
    let yraPirminis = true;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        yraPirminis = false;
        break;
      }
    }

    if (i > 1 && yraPirminis == true) {
      console.log(i);
    }
  }
console.groupEnd();