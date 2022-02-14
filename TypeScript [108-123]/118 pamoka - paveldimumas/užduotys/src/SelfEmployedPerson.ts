import Person, { type PersonProps } from './Person.js';

export type SelfEmployedPersonProps = PersonProps & {
  hourPay: number,
  hoursWorked: number,
}

class SelfEmployedPerson extends Person {
  private hourPay: number;
  private hoursWorked: number;

  constructor({
    hourPay,
    hoursWorked = 0,
    ...personProps
  }: SelfEmployedPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }
}

export default SelfEmployedPerson;