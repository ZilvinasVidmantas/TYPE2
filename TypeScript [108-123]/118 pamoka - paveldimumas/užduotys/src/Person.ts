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
export default Person;