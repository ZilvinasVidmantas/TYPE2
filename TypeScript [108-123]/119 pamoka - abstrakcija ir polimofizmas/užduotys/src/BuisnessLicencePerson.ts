import { type PersonProps } from './Person.js';
import Employee from './Employee.js';
import type { Job } from './types.js';
import { formatLine } from './helpers.js';
import { type IStrigifyable } from './types';

export type BuisnessLicencePersonProps = PersonProps & {
  jobs?: Job[],
};

class BuisnessLicencePerson extends Employee implements IStrigifyable {

  private jobs: Job[];

  constructor({ jobs = [], ...personProps }: BuisnessLicencePersonProps) {
    super(personProps);
    this.jobs = jobs;
  }

  public calcPay = (): number => {
    let sum: number = 0;
    this.jobs.forEach(job => {
      if (job.finished && !job.payed) {
        sum += job.pay;
        job.payed = true;
      }
    });

    return sum;
  }

  public override toString(): string {
    let result = this.getInitialsHeader() + formatLine('jobs:' + (this.jobs.length === 0 ? ' []' : ''), 1);
    if (this.jobs.length > 0) {
      result += this.jobs.map(({ id, title, pay, finished, payed, dateFinished }) =>
        formatLine(`id: ${id}`, 2) +
        formatLine(`title: ${title}`, 2) +
        formatLine(`pay: ${pay}`, 2) +
        (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '') +
        (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '') +
        (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '')
      ).join('\n');
    }

    return result;
  }
}

export default BuisnessLicencePerson;

