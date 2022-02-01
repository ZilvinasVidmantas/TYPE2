let masyvas = ["labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451];
console.log(masyvas);
masyvas.sort(function(pirmas,antras){return pirmas-antras});
masyvas.reverse();
console.log(masyvas);
//masyvas.splice(3, 3, "naujas", 5, 4, 6, ["PIRMAS", "antras"]);




// task 7
console.groupCollapsed("--- task 7 ---")
  // a - kas kelintą skaičių tarp b ir c išvesti į konsolę
  // b - pirmasis skaičius, nuo kurio į konsolę išspausdinami skaičiai
  // c - antrasis skaičius, iki kurio į konsolę išspausdinami skaičiai
  function task7(a, b, c){
    for(let i = b; i <= c; i+=a){ // i = i + a
      console.log(i);
    }
  }
  task7(36, 12, 364);
  console.log(" ");
  let mas7 = ["labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451,"labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451,"labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451,"labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451,"labas", 4, 6, 8, true, "false", false, 54,987,45,21,354,15,654,58,156,354,451];
  function task7_2(a, m, b){
    for(let i = b; i < m.length; i+=a){
      console.log(m[i]);
    }
  }
  task7_2(5, mas7, 3);
console.groupEnd();


// extra 1
console.groupCollapsed(" --- task extra 1 ---");
  let masyvasNumerisVienas = [1,2,3,4];
  //                          0 1 2 3
  let masyvasNumerisDu = ["A","B","C","D","E","F","G","H"];
  function extra1(masyvasPirmas, masyvasAntras){
    let pradinisPirmoMasyvoIlgis = masyvasPirmas.length;
    for(let i = 0; i < pradinisPirmoMasyvoIlgis; i++){
  //for(let i = pradinisPirmoMasyvoIlgis; i >= 0; i--)
      masyvasAntras.splice(masyvasPirmas.length, 0, masyvasNumerisVienas.shift());
      console.log(masyvasAntras);
    }
    console.log(" ");
    console.log(masyvasAntras);
  }
  extra1(masyvasNumerisVienas, masyvasNumerisDu);
console.groupEnd();

// extra 2
console.groupCollapsed(" --- task extra 2 ---");
  console.groupCollapsed(" --- task extra 2.1 ---");
    for(let i = 1; i <= 100; i++){
      if( i % 15 == 0 ){
        console.log("FizzBuzz");
      } else if( i % 5 == 0 ){
        console.log("Buzz");
      } else if( i % 3 == 0 ){
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
  console.groupEnd();

  console.groupCollapsed(" --- task extra 2.2 ---");
    function fizzBuzz1(imtiesPradzia, imtiesGalas){
      for(let i = imtiesPradzia; i <= imtiesGalas; i++){
        if( i % 15 == 0 ){
          console.log("FizzBuzz");
        } else if( i % 5 == 0 ){
          console.log("Buzz");
        } else if( i % 3 == 0 ){
          console.log("Fizz");
        } else {
          console.log(i);
        }
      }
    }
    fizzBuzz1(36,168);
  console.groupEnd();

  console.groupCollapsed(" --- task extra 2.3 ---");
    function fizzBuzz2(imtiesPradzia, imtiesGalas, pirmasSk, antrasSk){
      let maziausiasBendrasKartotinis;
      let nerado = true;
      let i = 1;
      while(nerado){
        if(i % pirmasSk == 0 && i % antrasSk == 0){
          maziausiasBendrasKartotinis = i;
          console.log("Bendras kartotinis: " + i);
          nerado = false;
        }
        i++;
      }

      for(let i = imtiesPradzia; i <= imtiesGalas; i++){
        if( i % (maziausiasBendrasKartotinis) == 0 ){
          console.log("FizzBuzz");
        } else if( i % (antrasSk) == 0 ){
          console.log("Buzz");
        } else if( i % (pirmasSk) == 0 ){
          console.log("Fizz");
        } else {
          console.log(i);
        }
      }
    }
    fizzBuzz2(36,168,9,6);
  console.groupEnd();
console.groupEnd();