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

const changePropComponent2ComponentName = ({ component, ...props }) => ({
  ...props,
  componentName: component,
});

const formatSectionsData = sectionArr => {
  // Grąžiname naujai suformuotą sekcijų duomenų masyvą, pakeisdami kiekvieną sekcijos duomenų objektą pagal funkciją 30-44
  return sectionArr.map(
    ({ subSections, children, ...rest }) => {
      // į rezultato objektą įrašome, visas objekto savybes, kurių nereikia keisti arba tikrinti
      const result = {
        ...rest
        // o kas čia?
      };
      if (children) {
        // o kaip gi čia?
      }
      if (subSections) {
        // O čia kas?
      }

      return result;
    }
  );
}


const sectionDataFormatted = formatSectionsData(sectionData);
const sectionComponents = sectionDataFormatted.map(data => new Section(data));
const sectionHtmlElements = sectionDataFormatted.map(component => component.htmlElement);

root.append(...sectionHtmlElements);
