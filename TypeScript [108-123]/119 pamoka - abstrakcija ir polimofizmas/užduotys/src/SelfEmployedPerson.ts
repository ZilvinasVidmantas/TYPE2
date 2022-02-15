import { type PersonProps } from './Person.js';
import Employee from './Employee.js';

export type SelfEmployedPersonProps = PersonProps & {
  hourPay: number,
  hoursWorked?: number,
}

class SelfEmployedPerson extends Employee {
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

  public calcPay = (): number => {
    return this.hourPay * this.hoursWorked;
  }
}

export default SelfEmployedPerson;