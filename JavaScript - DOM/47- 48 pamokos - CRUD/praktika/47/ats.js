/*

//          callback hell

console.log("pirmas");

setTimeout(()=>{
  console.log("antras");
  setTimeout(()=>{
    console.log("antros vidus");
    setTimeout(()=>{
      console.log("antros vidus");
      setTimeout(()=>{
        console.log("antros vidus");
        setTimeout(()=>{
          console.log("antros vidus");
          setTimeout(()=>{
            console.log("antros vidus");
            setTimeout(()=>{
              console.log("antros vidus");
              setTimeout(()=>{
                console.log("antros vidus");
                setTimeout(()=>{
                  console.log("antros vidus");
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 2000);

console.log("trecias");

*/

const stock = {
  fruits : ["braškėmis", "bananais", "kiviais", "obuoliais"],
  liquid : ["vanduo", "ledas"],
  holder : ["ant lazdelės", "puodelyje", "valfyje"],
  topping : ["šokoladu", "riešutais", "pabarstukais"]
};

let shopIsOpen = true;

//      async / await

let time = (ms) => {
  return new Promise( (resolve, reject) =>{
    if(shopIsOpen){
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed."));
    }
  });
};

let kitchen = async () => {
  try {
    while(shopIsOpen){
      await time(2000)
      console.log(`Klientas pasirinko ledus su ${stock.fruits[1]}.`)
      await time(0)
      console.log("Prasidėjo ledo gamyba.")
      await time(2000)
      console.log(`Pjaustom ${stock.fruits[1]}.`)
      await time(1000)
      console.log("Sudedame ingredientus į ledų mašiną.")
      await time(1000)
      console.log("Įjungiame ledų mašiną.")
      await time(2000)
      console.log(`Ledai patiekiami ${stock.holder[2]}.`)
      await time(3000)
      console.log(`Ledai paskaninami ${stock.topping[0]}.`)
      await time(2000)
      console.log(`Ledai pateikiami klientui.`);
      await time(5000)
      console.log("Naujas klientas daro užsakymą...");
    }
  }
  catch(error){
    console.log("Darbo diena baigėsi.");
  }
  finally{
    console.log("Klientas laimingas.");
  }
}

let clientsEat = async () => {
  try{
    while(shopIsOpen){
      await time(500)
      console.log("Klientai valgo ledus.");
    }
  }
  catch(error){
    console.log("Darbo diena baigėsi.");
  }
  finally{
    console.log("Nusileido saulė.");
  }
}

let reStocking = async () => {
  try{
    while(shopIsOpen){
      await time(15000)
      console.log("Papildytos atsargos.");
    }
  }
  catch(error){
    console.log("Darbo diena baigėsi.");
  }
  finally{
    console.log("Nusileido saulė.");
  }
}

let cleaning = async () => {
  try{
    while(shopIsOpen){
      await time(2000)
      console.log("Nuvalomas stalas.");
      await time(6000)
      console.log("Valomos grindys.");
    }
  }
  catch(error){
    console.log("Darbo diena baigėsi.");
  }
  finally{
    console.log("Nusileido saulė.");
  }
}

clientsEat();
kitchen();
reStocking();
cleaning();

/*
//        promises + then

let order = ( time, work ) => {
  return new Promise( (resolve, reject) => {
    if(shopIsOpen){
      if(!isNaN(time)){
        setTimeout(() => {
          resolve(work());        
        }, time);
      } else {
        reject(console.log("Sugedo ledų darymo mašina."))
      }
    } else {
      reject(console.log("Parduotuvė uždaryta."));
    }
  });
}

order(2000, () => console.log(`Klientas pasirinko ledus su ${stock.fruits[1]}.`))
  .then( () => {
    return order( 0, () => console.log("Prasidėjo ledo gamyba."));
  })
  .then( () => {
    return order( 2000, () => console.log(`Pjaustom ${stock.fruits[1]}.`));
  })
  .then( () => order( 1000, () => console.log("Sudedame ingredientus į ledų mašiną.")))
  .then( () => order( 1000, () => console.log("Įjungiame ledų mašiną.")))
  .then( () => order( 2000, () => console.log(`Ledai patiekiami ${stock.holder[2]}.`)))
  .then( () => {
    return order( "balh", () => console.log(`Ledai paskaninami ${stock.topping[0]}.`));
  })
  .then( () => {
    return order( 2000, () => console.log(`Ledai pateikiami klientui.`));
  })
  .catch( () => console.log("Klientas nuėjo sau."))
  .finally( () => console.log("Nusileidžia saulė."));
*/

/*
//          darymas su callbacks

let order = (fruits ,call_production) => {
  setTimeout(()=>{
    console.log(`Pirkėjas užsisako ledų su ${fruits}.`);
    call_production(fruits);
  }, 2000);
};

let production = (fruit) => {
  setTimeout( () => {
    console.log("Prasidėjo ledo gamyba.");
    setTimeout( () => {
      console.log(`Pjaustom ${fruit}.`);
      setTimeout( () => {
        console.log("Sudedame ingredientus į ledų mašiną.");
        setTimeout( () => {
          console.log("Sudedame ingredientus į ledų mašiną.");
          setTimeout( () => {
            console.log("Sudedame ingredientus į ledų mašiną.");
            setTimeout( () => {
              console.log("Sudedame ingredientus į ledų mašiną.");
              setTimeout( () => {
                console.log("Sudedame ingredientus į ledų mašiną.");
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 2000);
  }, 0)
}

order(stock.fruits[0], production);
*/