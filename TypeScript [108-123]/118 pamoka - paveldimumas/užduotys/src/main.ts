type Job = {
  id: string,
  title: string,
  pay: number,
  finished?: boolean,
  dateFinished?: Date,
}

class Person {
  protected id: string;
  protected name: string;
  protected surname: string;

  constructor(id: string, name: string, surname: string,) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  public sayMyName(): void {
    console.log(this.name, this.surname);
  }
}

// Worker is Person
class WorkPerson extends Person {
  private hourPay: number;
  private fullTimeEquivalent: number;

  constructor(
    id: string,
    name: string,
    surname: string,
    hourPay: number,
    fullTimeEquivalent: number,
  ) {
    super(id, name, surname);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }
}

class SelfEmployedPerson extends Person {
  private hourPay: number;
  private hoursWorked: number;

  constructor(
    id: string,
    name: string,
    surname: string,
    hourPay: number,
    hoursWorked: number = 0,
  ) {
    super(id, name, surname);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }
}

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

console.group('0. WorkPerson klasės objektai');
{
  const backendDeveloper = new SelfEmployedPerson('25169845878', 'Apsas', 'Revestenis', 25, 1);
  const frontendDeveloper = new SelfEmployedPerson('25169145878', 'Klikas', 'Eventauskas', 25, 0.5);

  console.log(backendDeveloper);
  console.log(frontendDeveloper);
}
console.groupEnd();


console.group('1. Sukurkite darbuotoją pagal individualią veiklą - užmokestis už kiekvieną valandą, kuris būtų Žmogus.');
{
  const selfEmployed1 = new SelfEmployedPerson('25169845878', 'Beribė', 'Jūračka', 25, 10);
  const selfEmployed2 = new SelfEmployedPerson('25169145878', 'Fanalijus', 'Analijus', 10);

  console.log(selfEmployed1);
  console.log(selfEmployed2);

}
console.groupEnd();

console.group('2. Sukurkite darbuotoją pagal Verslo liudijimą - sutartitnis užmokestis už atliktą darbą, kuris būtų Žmogus.');
{
  const designer = new BuisnessLicencePerson('15169845878', 'Plunksytė', 'Krupštytė');
  const marketingSpecialist = new BuisnessLicencePerson('15169845878', 'Protenis', 'Knistauskenis', [
    { id: 'job1', title: 'Facebook adds', pay: 200 },
    { id: 'job2', title: 'Google adds', pay: 700, finished: true, dateFinished: new Date(2022, 2, 14) },
  ]);

  console.log(designer);
  console.log(marketingSpecialist);
}
console.groupEnd();


// 3. Iškelkite klases į atskirus failus
// 4. Sukurkite tipą PersonProps - objektą, ir pakeiskite klasių konstruktorius pritaikydami šį tipą
// 5. 1, 2 uždavinių pavyzdinius darbuotojus įdėkite į viešai aprašytą masyvą

// pertrauka iki 10:30
// Užduotys atliekamos 20min. iki 10:50