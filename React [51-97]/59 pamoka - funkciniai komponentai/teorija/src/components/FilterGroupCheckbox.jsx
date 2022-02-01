import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

const FilterGroupCheckbox = ({ label, checked, onChange }) => {

  return (
    <FormGroup >
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange}/>}
        label={label}
      />
    </FormGroup>
  );
};

export default FilterGroupCheckbox;