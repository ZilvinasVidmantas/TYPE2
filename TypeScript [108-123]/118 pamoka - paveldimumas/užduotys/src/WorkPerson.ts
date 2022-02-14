import Person, { type PersonProps } from './Person.js';

export type WorkPersonProps = PersonProps & {
  hourPay: number,
  fullTimeEquivalent: number,
};

class WorkPerson extends Person {
  private hourPay: number;
  private fullTimeEquivalent: number;

  constructor({ hourPay, fullTimeEquivalent, ...personProps }: WorkPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }
}

export default WorkPerson;