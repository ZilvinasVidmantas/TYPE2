class Person {
  protected id: string;
  protected name: string;
  protected surname: string;

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

console.group('1. Sukurkite darbuotoją pagal individualią veiklą - užmokestis už kiekvieną valandą, kuris būtų Žmogus.');
{

}
console.groupEnd();

console.group('2. Sukurkite darbuotoją pagal Verslo liudijimą - sutartitnis užmokestis už atliktą darbą, kuris būtų Žmogus.');
{

}
console.groupEnd();
