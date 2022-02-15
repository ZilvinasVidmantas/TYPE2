class Person {
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    sayMyName() {
        console.log(this.name, this.surname);
    }
    getInitialsHeader() {
        const name = Object.getPrototypeOf(this).constructor.name;
        const formatted = name.replaceAll(/(?!^[A-Z])[A-Z]/g, (letter) => ' ' + letter.toLowerCase());
        return `${formatted}\n${this.name} ${this.surname}, ${this.id}:\n`;
    }
}
export default Person;
//# sourceMappingURL=Person.js.map