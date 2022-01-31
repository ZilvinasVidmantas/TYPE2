class Person {
  public name: string;
  private surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public getFullname(this: Person): string {
    return this.name + ' ' + this.surname;
  }

  public setName(this: Person, name: string) {
    this.name = name;
  }
}

const person1 = new Person('Serbentautas', 'Bauda');
