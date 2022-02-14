import Person from './Person.js';
import type { Job } from './types.js';

class BuisnessLicencePerson extends Person {
  private jobs: Job[];

  constructor(
    id: string,
    name: string,
    surname: string,
    jobs: Job[] = []
  ) {
    super(id, name, surname);
    this.jobs = jobs;
  }
}

export default BuisnessLicencePerson;