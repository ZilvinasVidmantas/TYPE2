
class Person {
  private id: string;
  private name: string;
  private surname: string;
  
  constructor(id: string, name: string, surname: string,) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  public sayMyName(): void {
    console.log(this.name, this.surname);
  }
}

// Worker is Person
class WorkPerson extends Person {
  private hourPay: number;
  private fullTimeEquivalent: number;

  constructor(
    id: string,
    name: string,
    surname: string,
    hourPay: number,
    fullTimeEquivalent: number,
  ) {
    super(id, name, surname);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }
}

const person1: Person = new Person('39325468985', 'Benkorčius', 'Tūlikas');
const worker1: WorkPerson = new WorkPerson('39325468985', 'Apsas', 'Rekvestenis', 13, 1);

worker1.sayMyName();


console.log(person1);