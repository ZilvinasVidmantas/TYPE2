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