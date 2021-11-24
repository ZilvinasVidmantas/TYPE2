import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@mui/material';
import DataTable from './components/DataTable';
import DataFilters from './components/DataFilters';

const filters = [
  { title: 'Markė', property: 'brand' },
  { title: 'Modelis', property: 'model' },
];

const initialCars = [
  { id: 1, brand: 'Opel', model: 'Astra', year: 2000 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2000 },
  { id: 3, brand: 'Subaru', model: 'Impreza', year: 2004 },
  { id: 4, brand: 'Volkswagen', model: 'Passat', year: 2006 },
  { id: 5, brand: 'Opel', model: 'Astra', year: 2008 }
]

const App = () => {
  const [cars /* funkcija nustatyti naujai <cars> kintamojo reikšmei */] = useState(initialCars);

  // pertrauka: 15
  // analizė: 15
  // tęsiam 10:00
  /**
   * Ši funkcija vykdosi, kuomet yra paspaudžiamas checkbox
   * @param {Event} event 
   */
  const handleFilterGroupChange = (event) => {
    // Iš checkbox gauta informacija, pagal kurią nuspręsima ką reikia keisti filtruose <filterPropsArray>
    const { value, name, checked } = event.target;

    // Tiesiogiai, keisti state reikšmių negalime, nes tuomet neiškvies komponento pervaizdavimas
    // Keičiant 'React state' reikšmes, būtina nurodyti pilną reikšmę:
    //  keičiant duomenis - nepakeisti kitų duomenų
    // Tam, perkuriame visus filtų nustatymus masyve <filterPropsArray>
    //                                 Perkuriame kiekvieną filtrą <filterProps>
    const newFilters = filterPropsArray.map(filterProps => ({
      // Išrašome filtro buvusias reikšmes, jog jos neprasirastų
      ...filterProps,
      // Tikriname, ar turime keisti šio filtro <filterProps> nustatymus <options>, PAGAL VARDĄ <name>
      options: filterProps.name !== name
        // VARDAS NESUTAPO - tai nėra filtras, kurį turime keisti, todėl paliekame seną reikšmę
        ? filterProps.options
        // VARDAS SUTAPO - tai yra filtras, kurį turi keisti, todėl perkuriame jo nustatymus <options>
        : filterProps.options.map(option => ({
          // Išrašome visas buvusias nustatymo <option> reikšmes, jog neprasirastų duomenys
          ...option,
          // Tikriname ar nustatymo reikšmė <option.value> yra tokia, kaip įvykusio evento reikšmė <value>
          //  taip - keičiame reikšmę į tokią, kokią gavome iš evento 
          //  ne - paliekame tokią reikšmę kokia buvo anksčiau <option.checked>
          checked: option.value === value ? checked : option.checked
        }))
    }));

    // Išsaugoje filtrų <filterPropsArray> pakeitimus, pakeičiame state reikšmę, naudodami set'erį <setDataFilterPropsArray>
    // Vidinė React logika atpažins skirtumus tarp senos <filterPropsArray> reikšmės ir naujai perduotos <newFilters> reikšmės
    //  ir pervaizduos šį komponentą
    // Tai išprovokuos ir vaikinių elementų persivaizdavimą, todėl pamatysime vaizdo pasikeitimą.
    setDataFilterPropsArray(newFilters);
  }

  const [filterPropsArray, setDataFilterPropsArray] = useState(filters.map(({ title, property }) => {
    const properties = cars.map(car => car[property]);
    const uniqProperties = [...new Set(properties)];
    const options = uniqProperties.map(uniqProp => ({
      label: uniqProp,
      value: uniqProp,
      checked: true
    }));

    return {
      title,
      name: property,
      options,
      onChange: handleFilterGroupChange
    }
  }));



  return (
    <Container>
      <Typography component="h1" variant="h3" gutterBottom align="center">Mašinos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataFilters filterPropsArray={filterPropsArray} />
        </Grid>
        <Grid item xs={9}>
          <DataTable
            headers={[
              { name: 'ID' },
              { name: 'Markė' },
              { name: 'Modelis' },
              { name: 'Gam. Metai', align: "right" }
            ]}
            data={cars}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;


/*
  Perskaityti:
    https://reactjs.org/docs/thinking-in-react.html

  0. Sudaryti atvaizdavimą - HTML + CSS | Komponenetai apjungti hierarchija viename faile

  1. Pasikartojančias arba gaubiančias kitus elementus vaizdo dalis išskaidyti komponentais

  2. Aprašyti komponentų prop'sus

  3. Įsivertinti minimalius state kiekvienam komponentui pagal kuriuos bus atvaizduojamas/keičiamas atvaizdavimas

  4. Nuspręsti, kur turi būti aprašyti duomenys, jog būtų įgalintas norimas funkcionalumas tarp komponentų (lifting state up)

  5. Aprašyti Event'listenerius, kurie keičia state ir įgalina norimą funkcionalumą
*/
