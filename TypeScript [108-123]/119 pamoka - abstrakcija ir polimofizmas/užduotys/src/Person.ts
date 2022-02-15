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

  protected getInitialsHeader(): string {
    const name = Object.getPrototypeOf(this).constructor.name;

    const formatted = name.replaceAll(
      /(?!^[A-Z])[A-Z]/g,
      (letter: string): string => ' ' + letter.toLowerCase()
    );

    return `${formatted}\n${this.name} ${this.surname}, ${this.id}:\n`;
  }
}
export default Person;


