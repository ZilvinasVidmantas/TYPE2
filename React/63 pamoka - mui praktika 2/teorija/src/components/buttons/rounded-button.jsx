import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(5),
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary,
}));

const RoundedButton = ({ children, ...props }) => <StyledButton {...props} >{children}</StyledButton>;

export default RoundedButton;