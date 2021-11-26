import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  height: 32,
  width: 32,
  minWidth: 'auto',
  borderRadius: '50%',
  padding: 0
})

const CircleButton = ({ children, ...props }) => <StyledButton {...props} >{children}</StyledButton>;

export default CircleButton;