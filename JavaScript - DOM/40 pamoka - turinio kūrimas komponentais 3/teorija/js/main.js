const root = document.querySelector('#root');


/*
  Perrašyti šį kodą, jog:
    1. Veiksmai būtų atliekami su kiekvienu <sectionData> masyvo elementu ( o ne į'hard-code'inta kaip 24-25 eil.)
      Keičiant kiekvieną duomenų objektą <sectionData> masyve, reikia įvertinti jog, jų savybėje <subSections>, taip pat gali reikėti 
      padaryti pakeitimus taip, kaip skiriasi seckcijų duomenų formavimas <section1Props> ir <section2Props> atvejais.

      Papildomai, kol laukiate kitų:
        Šiuo metu nėra, pavyzdžio, kaip reikėtų elgtis, jeigu ir sekcijos <subSections> savybės <subSections>  (ir t.t.) savybėje būtų kitų sekcijų.
        Peržiūrėkite video:
          https://www.youtube.com/watch?v=LteNqj4DFD8&ab_channel=DevSage
        Paskaitykite failą:
          * TYPE2\JavaScript\Atskiros temos kas nori anksciau\rekursija.js
        Peržiūrėkite paveikslėlius:
          * TYPE2\JavaScript\vaizdiniai pavyzdžiai\Rekursija fibonacci.png
          * TYPE2\JavaScript\vaizdiniai pavyzdžiai\Rekursija.png
        Pabandykite savarankiškai išspręsti kelis uždavinius:
          https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
      
  */

const section1Data = sectionData[0];
const section2Data = sectionData[1];

const changePropComponent2ComponentName = ({ component, ...props }) => ({
  ...props,
  componentName: component,
});

const section1Props = {
  title: section1Data.title,
  children: section1Data.children.map(changePropComponent2ComponentName),
  subSections: section1Data.subSections.map(({ children, ...subSection }) => ({
    ...subSection,
    children: children.map(changePropComponent2ComponentName)
  })),
};
const section2Props = {
  title: section2Data.title,
  children: section2Data.children.map(changePropComponent2ComponentName),
};


const sectionComponent1 = new Section(section1Props);
const sectionComponent2 = new Section(section2Props);

root.appendChild(sectionComponent1.htmlElement);
root.appendChild(sectionComponent2.htmlElement);
