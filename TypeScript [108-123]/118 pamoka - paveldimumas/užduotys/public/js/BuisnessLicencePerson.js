import Person from './Person.js';
class BuisnessLicencePerson extends Person {
    constructor(id, name, surname, jobs = []) {
        super(id, name, surname);
        this.jobs = jobs;
    }
}
export default BuisnessLicencePerson;
//# sourceMappingURL=BuisnessLicencePerson.js.map