
//      --- task 1 ---
let mas = [
  {id:0, name:"Burgeris0", inStock:true, primeCost:0.3, cost:1},
  {id:1, name:"Burgeris1", inStock:false, primeCost:0.1, cost:2.21},
  {id:2, name:"Burgeris2", inStock:true, primeCost:0.6, cost:1},
  {id:3, name:"Burgeris3", inStock:false, primeCost:0.53, cost:5.4},
  {id:4, name:"Burgeris4", inStock:true, primeCost:0.34, cost:2},
  {id:5, name:"Burgeris5", inStock:true, primeCost:0.65, cost:3}
];

mas.forEach(item => console.log(item));

console.groupCollapsed(" --- taks4 ---");
  console.groupCollapsed(" --- task4.0 ---")
    let mas4_0 = [];
    mas.forEach(value =>{
      if( value.inStock === true ){
        mas4_0.push(value);
      }
    });
    console.log(mas4_0);
  console.groupEnd();
  console.groupCollapsed(" --- task4.1 ---")
    let mas4_1 = mas4_0.map( value => (
      {name:value.name, profit:value.cost-value.primeCost}
    ));
    console.log(mas4_1);
  console.groupEnd();
  console.groupCollapsed(" --- task4.2 ---")
    
  console.groupEnd();
  console.groupCollapsed(" --- task4.3 ---")
    
  console.groupEnd();
  console.groupCollapsed(" --- task4.4 ---")
    
  console.groupEnd();
console.groupEnd();


//      --- task 6 ---
let sarasas = mas.map( value => "<li>" + "Prekė:" + value.name + "; Kaina:" + value.cost + "</li>");
sarasas = "<ul>" + sarasas.join("") + "</ul>";

document.querySelector('div').innerHTML = sarasas;


function yay(a,b,c){
  let masyvas;
  // veiksmai...
  return masyvas;
}
let skaiciusMasyvas = yay(50, 3, 789);
