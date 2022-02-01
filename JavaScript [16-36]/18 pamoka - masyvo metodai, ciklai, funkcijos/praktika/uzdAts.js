console.groupCollapsed("--- task 1 ---")
  // task 1 
  function sudetis(a, b){
    return a + b;
  }
  console.log(sudetis(5, 5));
  function atimtis(a, b){
    return a - b;
  }
  console.log(atimtis(5, 5));
  function daugyba(a, b){
    return a * b;
  }
  console.log(daugyba(5, 5));
  function dalyba(a, b){
    return a / b;
  }
  console.log(dalyba(5, 5));
console.groupEnd();


console.groupCollapsed("--- task 2 ---")
  // task 2
  let naujasMasyvas2 = [1,2,3,4,5,6];
  //                   0 1 2 3 4 5
  function u2(mas){
    for(let i = 0; i < mas.length; i++){
      console.log(mas[i]);
    }
  }
  console.log(u2(naujasMasyvas2));
console.groupEnd();


console.groupCollapsed("--- task 3 ---")
  // task 3
  let naujasMasyvas3 = [5,6,7,8,9,"Labas"];
    // 1 būdas - ką norėjau, kad darytumėt iki Miglei pasakant, kad galima ir kitaip
  function u3_1(mas){
    for(let i = mas.length-1; i >= 0; i--){
      console.log(mas[i]);
    }
  }
  console.log(u3_1(naujasMasyvas3));

    // 2 būdas - kurį pasakė Miglė.
  function u3_2(mas){
    mas.reverse();
    for(let i = 0; i < mas.length; i++){
      console.log(mas[i]);
    }
  }
  console.log(u3_2(naujasMasyvas3));
console.groupEnd();

console.groupCollapsed("--- task 4 ---")
  // task 4
  let naujasMasyvas4 = ["Labas", "Ate", "Kitas", "Šitas", "Pingvinas", "Pica", "Apčiyį", "Į sveikatą", "Ačiū"];
  function u4(mas){
    let surikiuotas = mas.sort();
    console.log(surikiuotas);
  }
  u4(naujasMasyvas4);
console.groupEnd();

console.groupCollapsed("--- task 5 ---")
  // task 5
  let naujasMasyvas5 = [8,9,1,54,615,321,54,984,15,16,651,8,1,61,61,9,18,19,16,1,61,51,321,65161,651,1,61,61,961,9];
  function u5(mas){
    let surikiuotas = mas.sort(function(a,b){return a-b});
    surikiuotas = surikiuotas.reverse();
    console.log(surikiuotas);
  }
  console.log(u5(naujasMasyvas5));
console.groupEnd();

console.groupCollapsed("--- task 6 ---")
  // task 6
  function u6(a, b){
    for(let i = a; i < b; i++){
      console.log(i);
    }
  }
  console.log(u6(156, 178));
console.groupEnd();

console.groupCollapsed("--- task 7 ---")
  // task 7
  function u7(x, a, b){
    for(let i = a; i < b; i+=x){
      console.log(i);
    }
  }
  console.log(u7(31, 56, 178));
console.groupEnd();

console.groupCollapsed("--- extra 1 ---")
  // extra 1
  let naujasMasyvas8_1 = [1,2,3,4,5,6];
  let naujasMasyvas8_2 = ["Labas", "Ate", 615, 321, 54, 984, 15, 16, 651, "Kitas", "Šitas"];
  console.log(naujasMasyvas8_1);
  console.log(naujasMasyvas8_2);
  console.log("");
  function extra1(mas1, mas2){
    let mas1Length = mas1.length;
    for(let i = 0; i < mas1Length; i++){
      mas2.splice(mas1.length, 0, mas1.shift());
      console.log(mas2); // tam kad vizualiai matytūsi pasikeitimai (neprivalomas)
    }
    console.log("");
    console.log(mas2);
  }
  console.log(extra1(naujasMasyvas8_1, naujasMasyvas8_2));
console.groupEnd();

console.groupCollapsed("--- extra 2 ---")
  // extra 2
  function extra2(a, b){
    for (var i=a; i <= b; i++){
      if (i % 15 == 0) console.log("FizzBuzz");
      else if (i % 3 == 0) console.log("Fizz");
      else if (i % 5 == 0) console.log("Buzz");
      else console.log(i);
    }
  }
  // omega short extra 2
  function extra2_omega(a, b){
    for(let i=a;i<=b;)console.log((i%3?'':'fizz')+(i%5?'':'buzz')||++i);
  }
console.groupEnd();