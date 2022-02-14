import Person from './Person.js';
class SelfEmployedPerson extends Person {
    constructor(id, name, surname, hourPay, hoursWorked = 0) {
        super(id, name, surname);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
}
export default SelfEmployedPerson;
//# sourceMappingURL=SelfEmployedPerson.js.map