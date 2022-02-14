import Person, { type PersonProps } from './Person.js';

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

class WorkPerson extends Person {
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
}

export default WorkPerson;
