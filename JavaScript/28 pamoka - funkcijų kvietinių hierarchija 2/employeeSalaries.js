const company = {
  title: 'Šaraškino kontora',
  departaments: [
    {
      title: 'Chaltūros departamentas',
      employees: [
        {
          fullname: 'Džekas Tūzas',
          jobTitle: 'Sienų apdaila',
          contractType: 'Service contract',
          servicePrice: 2000
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
//    1. Skaičiuojame kiekvieno departamento darbuotojų atlyginimus, ir sumuojame kiekvieno departamento darbuotojų atlyginimo sumas
const contractTypeSalaryFunctions = {
  'Individual activity': ({ hourPay, hoursWorked }) => hourPay * hoursWorked,
  'Contract': ({ salary }) => salary,
  'Service contract': ({ servicePrice }) => servicePrice,
}
const resultA = company.departaments.reduce((allEmployeesSalarySum, { employees }) => {
  const departamentSalaries = employees.reduce((sum, employee) => {
    let salary = contractTypeSalaryFunctions[employee.contractType](employee);
    return sum + salary;
  }, 0);
  return allEmployeesSalarySum + departamentSalaries
}, 0);

// Sprendimas B
//    1. Visus darbuotojus sudedame į vieną masyvą ir tuomet sumuojame darbuotojų atlyginimus
const resultB = company.departaments
  .reduce((allWorkers, { employees }) => [...allWorkers, ...employees], [])
  .reduce((sum, { contractType, ...employee }) => sum + contractTypeSalaryFunctions[contractType](employee), 0);

console.log({
  resultA,
  resultB
});
