import Person from './Person.js';
class WorkPerson extends Person {
    constructor(id, name, surname, hourPay, fullTimeEquivalent) {
        super(id, name, surname);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
}
export default WorkPerson;
//# sourceMappingURL=WorkPerson.js.map