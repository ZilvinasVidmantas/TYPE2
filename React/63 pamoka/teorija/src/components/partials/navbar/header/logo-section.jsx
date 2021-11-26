import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import AirbnbIcon from '../../../icons/airbnb-icon';

const LogoLink = styled(Link)(({ theme }) => ({
  height: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  '&:hover': {
    background: theme.palette.action.hover
  }
}));

const LogoSection = () => 
  <LogoLink href="#" >
    <AirbnbIcon />
  </LogoLink >;

export default LogoSection;