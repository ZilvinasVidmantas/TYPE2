export type PersonProps = {
  id: string,
  name: string,
  surname: string,
};

class Person {
  protected id: string;
  protected name: string;
  protected surname: string;

  constructor({ id, name, surname }: PersonProps) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  public sayMyName(): void {
    console.log(this.name, this.surname);
  }
}
export default Person;