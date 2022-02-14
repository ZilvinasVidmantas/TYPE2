import Person, { type PersonProps } from './Person.js';
import type { Job } from './types.js';

export type BuisnessLicencePersonProps = PersonProps & {
  jobs: Job[],
};

class BuisnessLicencePerson extends Person {
  private jobs: Job[];

  constructor({ jobs, ...personProps }: BuisnessLicencePersonProps) {
    super(personProps);
    this.jobs = jobs;
  }
}

export default BuisnessLicencePerson;