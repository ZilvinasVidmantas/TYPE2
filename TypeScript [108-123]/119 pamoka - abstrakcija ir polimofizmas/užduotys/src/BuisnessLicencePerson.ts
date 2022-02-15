import { type PersonProps } from './Person.js';
import Employee from './Employee.js';
import type { Job } from './types.js';

export type BuisnessLicencePersonProps = PersonProps & {
  jobs?: Job[],
};

class BuisnessLicencePerson extends Employee {
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
}

export default BuisnessLicencePerson;