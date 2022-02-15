import Person, { type PersonProps } from './Person.js';

abstract class Employee extends Person {
  constructor(props: PersonProps) {
    super(props);
  }

  public abstract calcPay(): number;
}

export default Employee;