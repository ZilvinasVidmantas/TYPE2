import { type PersonProps } from './Person.js';
import Employee from './Employee.js';
import { formatLine } from './helpers.js';
import { type IStrigifyable } from './types';

const calcMonthWorkDays = (
  year: number = new Date().getFullYear(),
  month: number = new Date().getMonth(),
): number => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let days: number = 0;
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate: Date = new Date(year, month, day);
    const weekDay: number = currentDate.getDay();
    if (weekDay > 0 && weekDay < 6) {
      days++;
    }
  }
  return days;
}

export type WorkPersonProps = PersonProps & {
  hourPay: number,
  fullTimeEquivalent: number,
};

class WorkPerson extends Employee implements IStrigifyable {
  private hourPay: number;
  private fullTimeEquivalent: number;

  constructor({ hourPay, fullTimeEquivalent, ...personProps }: WorkPersonProps) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  public calcPay = (): number => {
    return calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
  }

  public override toString(): string {
    return this.getInitialsHeader() +
      formatLine(`hour pay: ${this.hourPay}`, 1) +
      formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1) + '\n';
  }
}

export default WorkPerson;

