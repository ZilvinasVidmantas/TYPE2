import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

const FilterGroupCheckbox = ({ label, checked, onChange, name, value }) => {
  
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} name={name} value={value}/>}
        label={label || '--[UNDEFINED]--'}
      />
    </FormGroup>
  );
};

export default FilterGroupCheckbox;