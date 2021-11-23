import FilterGroupCheckbox from './FilterGroupCheckbox';
import { Typography } from '@mui/material';

const FilterGroup = () => {
  return (
    <>
      <Typography component="h3" variant="h5">Gamintojas</Typography>
      <FilterGroupCheckbox checked={true} label="Opel" />
      <FilterGroupCheckbox onChange={(e) => console.log(e.target)} label="BMW" />
      <FilterGroupCheckbox label="Subaru" />
      <FilterGroupCheckbox onChange={(e) => console.log(e.target)} checked={false} label="Be baro" />
      <FilterGroupCheckbox />
    </>
  );
};

export default FilterGroup;

/*
  1. Sugalvoti kokia struktūrą turi būti perduodami FilterGroup checkbox'ų duomenys?
  2. Tėviniame komponente perduoti duomenis, savo sugalvota struktūra
  3. Panaudoti tuos ir sugeneruoti atitinkamą kiekį FilterGroupCheckbox komponenetų
  4. Padaryti taip, jog komponentas nenutrauktų programos, jeigu yra kurimas be jokių <props>

*/