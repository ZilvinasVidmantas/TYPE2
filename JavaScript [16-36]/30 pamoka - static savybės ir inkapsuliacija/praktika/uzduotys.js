console.groupCollapsed(" --- task 1 --- ");
  class Car {
    constructor(name, year){
      this.name = name;
      this.year = year;
      this.helloCar = "Labas, čia mano mašina " + this.name + " ir ji buvo pagaminta " + this.year + " metais.";
    }
    age(){
      let date = new Date();
      date = date.getFullYear();
      return "Šitai mašinai yra " + (date - this.year) + " metų.";
    }
  }
  let manoMasina = new Car("Fiat", 2001);
  console.log(manoMasina);
  console.log(manoMasina.helloCar);
  console.log(manoMasina.age());
console.groupEnd();

console.groupCollapsed(" --- task 3 --- ");
  class Point{
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.coordinates = this.x +"."+this.y;
    }
    static distance(a, b){
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      return Math.hypot(dx, dy);
    }
  }
  let taskas1 = new Point(5, 3);
  let taskas2 = new Point(1, 6);
  console.log(Point.distance(taskas1, taskas2));
console.groupEnd();