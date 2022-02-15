import { type PersonProps } from './Person.js';
import Employee from './Employee.js';
import { formatLine } from './helpers.js';

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

  public toString(): string {
    return this.getInitialsHeader() +
      formatLine(`hour pay: ${this.hourPay}`, 1) +
      formatLine(`hours worked: ${this.hoursWorked}`, 1) + '\n';
  }
}

export default SelfEmployedPerson;