import SelectableButton from './selectable-button';
import { styled } from '@mui/material/styles';

const FilterButton = ({ children, ...props }) => {


  return <SelectableButton {...props}>{children}</SelectableButton>;
}

export default FilterButton;