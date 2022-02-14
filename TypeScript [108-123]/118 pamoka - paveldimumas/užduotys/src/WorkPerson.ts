import Person from './Person.js';

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

export default WorkPerson;