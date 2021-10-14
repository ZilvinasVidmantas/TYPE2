console.groupCollapsed("Zmones");
  const zmones = [
    {
      name: "Rokas",
      surname: "Banaitis",
      age: 25,
      height: 188,
      weight: 75,
      sex: "vyras"
    }, {
      name: "Rokass",
      surname: "Banaitiss",
      age: 255,
      height: 200,
      weight: 80,
      sex: "vyras"
    }, {
      name: "Rokasss",
      surname: "Banaitisss",
      age: 2555,
      height: 160,
      weight: 50,
      sex: "vyras"
    }
  ];

  zmones.forEach(zmogus => {
    let zmogausUgisMetraisKvadratu = Math.pow((zmogus.height / 100), 2);
    console.log(zmogus.weight / zmogausUgisMetraisKvadratu); // svoris(kg) / ugis(m)^2
  });


  const heights = zmones.map((x, i) => {
    return {
      id: i,
      height: x.height
    }
  });
  console.log(heights);
console.groupEnd();

console.groupCollapsed("Cars");
  class Car {
    constructor(brand, model, year, color, fuelTypes, price) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.fuelTypes = fuelTypes;
      this.price = price;
    }
  }

  const cars = [
    new Car("audi", "TT", 2052, "yellow", ["gas", "electric"], 5000),
    new Car("audi", "TT", 2032, "yellow", ["gas", "dysel"], 5000),
    new Car("audi", "TT", 2042, "yellow", ["gas"], 5000),
    new Car("audi", "TT", 2022, "yellow", ["electric"], 5000),
    new Car("audi", "TT", 2002, "yellow", ["dysel", "electric"], 5000),
    new Car("audi", "TT", 2012, "yellow", ["dysel"], 5000)
  ];

  console.log(cars);

  /* 4.1 */
  let electricCarsForForIf = [];
  for (let i = 0; i < cars.length; i++) {
    for (let j = 0; j < cars[i].fuelTypes.length; j++) {
      if (cars[i].fuelTypes[j] === "electric") {
        electricCarsForForIf.push(cars[i]);
      }
    }
  }
  console.log(electricCarsForForIf);

  /* 4.2 */
  let electricCarsForEachForIf = [];
  cars.forEach(car => {
    for (let j = 0; j < car.fuelTypes.length; j++) {
      if (car.fuelTypes[j] === "electric") {
        electricCarsForEachForIf.push(car);
      }
    }
  });
  console.log(electricCarsForEachForIf);

  /* 4.3 */
  let electricCarsForEachForEachIf = [];
  cars.forEach(car => {
    car.fuelTypes.forEach(fuel => {
      if (fuel === "electric") {
        electricCarsForEachForEachIf.push(car);
      }
    });
  });
  console.log(electricCarsForEachForEachIf);

  /* 4.4 */
  let electricCars = cars.filter( car => (car.fuelTypes.includes("electric")));
  console.log(electricCars);

  /* 5 */
  let electricCarsNew = cars.filter( car => (car.fuelTypes.includes("electric") && car.year > 2016));
  console.log(electricCarsNew);

  /* 4.4 extra */
  let notElectricCars = cars.filter( car => !(car.fuelTypes.includes("electric")));
  console.log(notElectricCars);

console.groupEnd();

/* BOB vs ALICE */
console.groupCollapsed("--- Bob VS Alice ---");
  
  class Player{
    #hp;
    #maxHp;
    #en;
    #maxEn;

    constructor(name, health, energy, armor){
      this.#hp = health;
      this.#maxHp = health;
      this.#en = energy;
      this.#maxEn = energy;

      this.name = name;
      this.armor = armor;
    }

    getHp(){
      return this.#hp;
    }
    getEn(){
      return this.#en;
    }
    getHpPerc(){
      return Math.round((this.#hp/this.#maxHp)*100*100)/100;
    }
    setHp(value){
      if(value < 0){
        this.#hp = 0;
      } else if(value > this.#maxHp){
        this.#hp = this.#maxHp;
      } else {
        this.#hp = value;
      }
    }
    setEn(value){
      if(value < 0){
        this.#en = 0;
      } else if(value > this.#maxEn){
        this.#en = this.#maxEn;
      } else {
        this.#en = value;
      }
    }

    skills = {};
    learnSkill(name, stats){
      let fixedName = name;
      this.skills[name] = stats;
      this[fixedName] = function(target){
        let skillStats = this.skills[name];
        //    ENERGY
        if(skillStats.cost > this.getEn()){
          return `${this.name} tried to cast ${name}, but didn't had enough energy.`;
        }
        this.setEn(this.getEn() - skillStats.cost);

        //    ARMOR
        let effectiveArmor = target.armor - skillStats.penetration;
        if(effectiveArmor < 0){
          effectiveArmor = 0;
        } else if( effectiveArmor > 100) {
          effectiveArmor = 100;
        }

        //    DAMAGE
        let newTargetHp = target.getHp();
        let damage = skillStats.damage * ((100 - effectiveArmor) / 100);
        newTargetHp -= damage;
        target.setHp(newTargetHp);

        //    HEALTH
        this.setHp(this.getHp() + skillStats.heal);

        //    DESCRIPTION
        let description = `${this.name} casted ${name}, ${skillStats.desc}, against ${target.name}, doing ${Math.round(damage*100)/100} damage!`;
        if(skillStats.heal > 0){
          description += ` ${this.name} healed for ${skillStats.heal} healt!`
        }
        if(target.getHp() === 0 ){
          description += ` ${target.name} died.`;
        } else {
          description += ` ${target.name} is at ${target.getHpPerc()} % health.`;
        }
        
        console.log(description);
      }
    }
  }

  const alice = new Player("Alice", 100, 90, 30);
  //                        name     hp  en  ar
  const bob = new Player("Bob", 100, 50, 10);

  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 3,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
  });
  alice.learnSkill("IceBlast", {
    damage: 18,
    penetration: 1.6,
    heal: 3,
    cost: 8,
    desc: "a freezery magical attack"
  });
  alice.fireball(bob);
  alice.IceBlast(bob);

console.groupEnd();