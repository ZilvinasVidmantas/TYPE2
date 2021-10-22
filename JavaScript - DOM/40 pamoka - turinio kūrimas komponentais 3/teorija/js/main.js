const root = document.querySelector('#root');

const changeChildComponentProps = ({ component, ...props }) => ({
  ...props,
  componentName: component,
});

const formatSectionsData = sectionDataArr => {
  // Grąžiname naujai suformuotą sekcijų duomenų masyvą, pakeisdami kiekvieną sekcijos duomenų objektą pagal funkciją 30-41
  return sectionDataArr.map(
    ({ subSections, children, ...rest }) => {
      // į rezultato objektą įrašome, visas objekto savybes, kurių nereikia keisti arba tikrinti
      const result = { ...rest };
      if (children) {
        result.children = children.map(changeChildComponentProps);
      }
      if (subSections) {
        result.subSections = formatSectionsData(subSections);
      }

      return result;
    }
  );
}

const sectionDataFormatted = formatSectionsData(sectionData);
const sectionComponents = sectionDataFormatted.map(data => new Section(data));
const sectionHtmlElements = sectionComponents.map(component => component.htmlElement);

// root.append(...sectionHtmlElements);

/* 
  ------------------ 1 dalis - ContactComponent kūrimas ---------------------------
  1. Peržiūrėkite nuotrauką 'task.png'
  2. Suformuokite vieno komponento objektą <actorData>
  3. Sukurkite savo komponentą 'ContactComponent', kuris panaudotų [2.] objekto duomenis suformuoti(render) vaizdą pagal 'task.png'
    type ContactComponentProps = {
      fullname: string,
      imgSrc: string,
      role: string,
    }
  4. prijungti šio [3.] komponento vaizdą prie <root>

  ------------------ 2 dalis - ContactContainerComponent kūrimas ---------------------------
  1. Peržiūrėkite nuotrauką 'task.png'
  2. Suformuokite masyvą <actorDataArr>, kuriame būtų objektai, pagal 1 dalies [2.] užduotį
  3. Sukurkite savo komponentą 'ContactContainerComponent', kuris panaudotų [2.]<actorDataArr> duomenis suformuoti(render) išdėstymą pagal 'task.png'
      type ContactContainerComponentProps = Array<ContactComponentProps>
  4. prijungti šio [3.] komponento vaizdą prie <root>
*/

/*
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

// pavyzdys 1 dalis:
const serviceData = serviceDataArr[0];
const serviceComponent = new ServiceComponent(serviceData);
root.append(serviceComponent.htmlElement);


// pavyzdys 2 dalis:
const serviceContainerComponent = new ServiceContainerComponent({
  data: serviceDataArr
});
root.append(serviceContainerComponent.htmlElement);
