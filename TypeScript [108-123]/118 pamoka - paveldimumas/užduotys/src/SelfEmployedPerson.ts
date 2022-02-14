import Person from './Person.js';

class SelfEmployedPerson extends Person {
  private hourPay: number;
  private hoursWorked: number;

  constructor(
    id: string,
    name: string,
    surname: string,
    hourPay: number,
    hoursWorked: number = 0,
  ) {
    super(id, name, surname);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }
}

export default SelfEmployedPerson;