
// --- task 1 ---
console.groupCollapsed(" --- task 1 ---");
  let mas = [
    {id:0, name:"Burgeris0", inStock:true, primeCost:0.3, cost:1},
    {id:1, name:"Burgeris1", inStock:false, primeCost:0.1, cost:2.21},
    {id:2, name:"Burgeris2", inStock:true, primeCost:0.6, cost:1},
    {id:3, name:"Burgeris3", inStock:false, primeCost:0.53, cost:5.4},
    {id:4, name:"Burgeris4", inStock:true, primeCost:0.34, cost:2},
    {id:5, name:"Burgeris5", inStock:true, primeCost:0.65, cost:3},
    {id:6, name:"Cola", inStock:true, primeCost:0.1, cost:1}
  ];
  console.log(mas);
console.groupEnd();

// --- task 2 ---
console.groupCollapsed(" --- task 2 ---");
  mas.forEach(item => console.log(item));
console.groupEnd();

// --- task 3 ---
console.groupCollapsed(" --- task 3 ---");
  mas.forEach(item => console.log("Vardas: " + item.name + "; Kaina: " + item.cost));
console.groupEnd();

//    --- task 4 ---
console.groupCollapsed(" --- task 4 ---");
  console.groupCollapsed(" --- task 4.0 ---")
    let mas4_0 = [];
    mas.forEach(value =>{
      if( value.inStock === true ){
        mas4_0.push(value);
      }
    });
    console.log(mas4_0);
  console.groupEnd();

  console.groupCollapsed(" --- task 4.1 ---")
    let mas4_1 = mas4_0.map( value => (
      {name:value.name, profit:value.cost-value.primeCost}
    ));
    console.log(mas4_1);
  console.groupEnd();

  console.groupCollapsed(" --- task 4.2 ---")
    let mas4_2_1 = [{name:"Burgeris4", amount:4}, {name:"Cola", amount:2}];
    let mas4_2_2 = [{name:"Burgeris1", amount:2}, {name:"Cola", amount:2}];
    console.log(mas4_2_1);
    console.log(mas4_2_2);
  console.groupEnd();

  console.groupCollapsed(" --- task 4.3 ---")
    let pelnas = 0;
    mas4_2_1.forEach( uzsakymoItem => {
      mas4_1.forEach( menuItem => {
        if(menuItem.name === uzsakymoItem.name){
          console.log(menuItem.profit * uzsakymoItem.amount);
          pelnas += menuItem.profit * uzsakymoItem.amount;
        }
      });
    });
    console.log("4_2_1 u??sakymas atne????: " + pelnas + " pelno.");
  console.groupEnd();

  console.groupCollapsed(" --- task 4.4 ---")
    let bendra = 0;
    let cekis = [];
    mas.forEach( menuItem => {
      mas4_2_1.map( uzsakymoItem =>{ // ??ia vietoj map galima ra??yti ir forEach ir viskas veiks
        if( menuItem.name === uzsakymoItem.name ){
          bendra += uzsakymoItem.amount * menuItem.cost;
          cekis.push({
            name: uzsakymoItem.amount + " " + uzsakymoItem.name,
            price: uzsakymoItem.amount * menuItem.cost         
          })
        }
      });
    });
    cekis.forEach(item => console.log(item))
    console.log("Total price: " + bendra);
    // bendrai pa??mus ??itai u??duo??iai nereik??jo naudoti map. Tai tik apsunkino dalykus. Vir?? valandos krap????iau galv?? ir nepavyko gra??iai su map padaryti, tai jei padar??te be jo - all good. Jei ka??kam pavyko taisyklingai padaryti naudojant map pagal paskirt??, b??t?? labai ??domu pasi??i??r??ti. Ryt iki u??si??mimo pam??ginsiu v??l, bet galimai taip ir paliks.
  console.groupEnd();
console.groupEnd();

//      --- task 5 ---
console.groupCollapsed(" --- task 5 ---");
  let mas5 = [];
  mas.forEach(value =>{
    if( value.id > 1 && value.cost > 2 && value.cost < 10 ){
      mas5.push(value);
    }
  });
  console.log(mas5);
console.groupEnd();

//      --- task 6 ---
console.groupCollapsed(" --- task 6 ---");
  let sarasas = mas.map( value => "<li>" + "Prek??:" + value.name + "; Kaina:" + value.cost + "</li>");
  sarasas = "<ul>" + sarasas.join("") + "</ul>";
console.groupEnd();
