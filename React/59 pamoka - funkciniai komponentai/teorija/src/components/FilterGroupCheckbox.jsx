import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

const FilterGroupCheckbox = () => {
  
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Opel" />
    </FormGroup>
  );
};

export default FilterGroupCheckbox;