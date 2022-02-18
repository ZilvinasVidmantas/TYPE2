* instaliavimas:
  * npm i -g create-react-app
  * Naudojant šią biblioteką galite sukurti pradinį savo puspalį pagal aplikacijos šabloną.
    Standartiškai (be parametrų) sukuriama vanilaJS React.js aplikacija su minimaliomis bibliotekomis.
    Visgi galima naudoti --template nustatymus, jeigu iškart norite sukurti aplikaciją kuri naudoja papildomas bibliotekas.
    Šablonų yra daug ir atsiranda vis naujų. Po šių kursų rekomenduojama jų naršyti čia, kad nereikėtų visko įrašinėti patiems:
      https://www.npmjs.com/search?q=cra-template-*
    pvz.:
      $create-react-app app-pavadinimas --template typescript - iškart sukuria aplikaciją naudojant typescript
      $create-react-app app-pavadinimas --template redux-typescript - iškart sukuria aplikaciją naudojant typescript Ir reduk toolkit
  * Nauja React aplikacija yra sukuriama atskirame aplanke, todėl reikia komandinės eilutės vietą pakeisti į sukurto aplanko vietą
    Tai galite padaryti pakeitę komandinės eilutės vietą:
      $cd app-pavadinimas
    arba atsidarė sukurtą app-pavadinimas/ aplanką su VSCode. Taip komandinės eilutės pagrindinis kelias bus projekto kelias.