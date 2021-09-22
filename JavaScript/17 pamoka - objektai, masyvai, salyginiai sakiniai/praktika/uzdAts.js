








//              Extra

let asmuo = {};
const i = "i";
const e = "e";
const au = "au";
                                                           // Rokas
// let str1Start = str1.slice(0, str1.length-1);           // Roka
// let str1End = str1.slice(str1.length-1, str1.length);   // s
// let str1End2 = str1.slice(str1.length-2, str1.length-1);// a
asmuo.vardas = prompt("Koks tavo vardas?");
if(asmuo.vardas.slice(asmuo.vardas.length-1, asmuo.vardas.length) == "s"){ // tikrina ar galune S
    if(asmuo.vardas.slice(asmuo.vardas.length-2, asmuo.vardas.length-1) == "i"){
      let vardasPasisveikinti = asmuo.vardas.slice(0, asmuo.vardas.length-1);
      console.log("Labas " + vardasPasisveikinti + "!");
    } else if(asmuo.vardas.slice(asmuo.vardas.length-2, asmuo.vardas.length-1) == "a"){
        let vardoPradzia = asmuo.vardas.slice(0, asmuo.vardas.length-1); // Jona
        let vardasPasisveikinti = vardoPradzia + i; // Jonai
        console.log("Labas " + vardasPasisveikinti + "!");
    } else if(asmuo.vardas.slice(asmuo.vardas.length-2, asmuo.vardas.length-1) == "u"){
        let vardoPradzia = asmuo.vardas.slice(0, asmuo.vardas.length-2); // Andri
        let vardasPasisveikinti = vardoPradzia + au;  // Andriau
        console.log("Labas " + vardasPasisveikinti + "!");
    }
} else if(asmuo.vardas.slice(asmuo.vardas.length-1, asmuo.vardas.length) == "a"){ // ar galune A
    console.log("Labas " + asmuo.vardas + "!");
} else if(asmuo.vardas.slice(asmuo.vardas.length-1, asmuo.vardas.length) == "ė"){ // ar galune Ė
    let vardoPradzia = asmuo.vardas.slice(0, asmuo.vardas.length-1);
    let vardasPasisveikinti = vardoPradzia + e;
    console.log("Labas " + vardasPasisveikinti + "!");
}