const company = {
  title: 'Šaraškino kontora',
  departaments: [
    {
      title: 'Chaltūros departamentas',
      employees: [
        {
          fullname: 'Džekas Tūzas',
          jobTitle: 'Sienų apdaila',
          contractType: 'Individual activity',
          hourPay: 10,
          hoursWorked: 88
        },
        {
          fullname: 'Vanda Netyčiauskienė',
          jobTitle: 'Sulčių spaudikė',
          contractType: 'Individual activity',
          hourPay: 8,
          hoursWorked: 180
        },
        {
          fullname: 'Saulėnas Šonaslidis',
          jobTitle: 'Padangų išganymo specialistas',
          contractType: 'Contract',
          salary: 2000,
        }
      ]
    },
    {
      title: 'Spekuliacijos departamentas',
      employees: [
        {
          fullname: 'Knisys Protauskas',
          jobTitle: 'Marketingistas',
          contractType: 'Individual activity',
          hourPay: 25,
          hoursWorked: 48
        }, {
          fullname: 'Vandenė Aptekenė',
          jobTitle: 'Pardavėja',
          contractType: 'Contract',
          salary: 1600,
        }, {
          fullname: 'Senelyzas Statauskas',
          jobTitle: 'Barmenas',
          contractType: 'Contract',
          salary: 1660,
        }
      ]
    }
  ]
}

// Suskaičiuoti, kokią sumą reikia išmokėti darbuotojams

// Sprendimas A
//    1. Atrenkami visi darbuotojai pagal individualią veiklą, ir suskaičiuojami jų atlyginimai
//    2. Atrenkami visi darbuotojai pagal darbo sutartį, ir suskaičiuojami jų atlyginimai
//    3. Grąžinamas [1.] + [2.]
const contractTypeSalaryFunctions = [
  { type: 'Individual activity', salaryFunction: (employee) => employee.hourPay * employee.hoursWorked },
  { type: 'Contract', salaryFunction: (employee) => employee.salary },
];
const result1 = contractTypeSalaryFunctions.reduce((allEmployeesSalarySum, { type, salaryFunction }) => {
  const employeesByContractType = company.departaments.reduce((employees, departament) => [
    ...employees,
    ...departament.employees.filter(x => x.contractType === type)
  ], []);
  const employeeSalariesByContractType = employeesByContractType.reduce((sum, employee) => sum + salaryFunction(employee), 0);
  return allEmployeesSalarySum + employeeSalariesByContractType;
}, 0)

// Sprendimas B
//    1. Skaičiuojame kiekvieno departamento darbuotojų atlyginimus, ir sumuojame kiekvieno departamento darbuotojų atlyginimo sumas

const result2 = company.departaments.reduce((allEmployeesSalarySum, { employees }) => {
  const departamentSalaries = employees.reduce((sum, employee) => {
    let salary;
    if (employee.contractType === 'Individual activity') {
      salary = employee.hourPay * employee.hoursWorked;
    } else {
      salary = employee.salary;
    }
    return sum + salary;
  }, 0);
  return allEmployeesSalarySum + departamentSalaries
}, 0);

// Sprendimas C
//    1. Visus darbuotojus sudedame į vieną masyvą ir tuomet sumuojame darbuotojų atlyginimus
const result3 = company.departaments
  .reduce((allWorkers, { employees }) => [...allWorkers, ...employees], [])
  .reduce((sum, employee) => {
    let salary;
    if (employee.contractType === 'Individual activity') {
      salary = employee.hourPay * employee.hoursWorked;
    } else {
      salary = employee.salary;
    }
    return sum + salary;
  }, 0)

console.log({
  result1,
  result2,
  result3
});
