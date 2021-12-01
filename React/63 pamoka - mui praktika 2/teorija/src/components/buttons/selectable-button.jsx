import RoundedButton from './rounded-button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(RoundedButton)(({theme, selected}) => ({
  border: `1px solid ${selected ? theme.palette.common.black: theme.palette.grey.A400 }`,
}));

const FilterButton = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default FilterButton;