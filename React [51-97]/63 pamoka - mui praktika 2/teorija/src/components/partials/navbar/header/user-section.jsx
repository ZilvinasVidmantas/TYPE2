import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import RoundedButton from '../../../buttons/rounded-button';
import CircleButton from '../../../buttons/circle-button';

const HostButton = styled(RoundedButton)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: theme.shadows[0],
  fontWeight: 600,
  "&:hover": {
    background: theme.palette.action.hover
  }
}));

const StyledCircleButton = styled(CircleButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(6),
  '&:hover': {
    background: theme.palette.action.hover,
  }
}));

const UserButton = styled(RoundedButton)(({ theme }) => ({
  background: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey.A350}`,
  boxShadow: theme.shadows[0],
  marginLeft: theme.spacing(2),
  "&:hover": {
    background: theme.palette.common.white,
    boxShadow: theme.shadows[3]
  }
}));

const NotificationNumber = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '50%',
  fontSize: 9,
  height: 18,
  width: 18,
  border: `2px solid ${theme.palette.common.white}`,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -1,
  right: -1
}));


const UserSection = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <HostButton>Tapti šeimininku</HostButton>
      <StyledCircleButton>
        <LanguageIcon sx={{ fontSize: 20 }} />
      </StyledCircleButton>
      <UserButton variant="contained" sx={{ py: 1, px: 1 }}>
        <MenuIcon sx={{ fontSize: 18, mr: 1 }} />
        <NotificationNumber>1</NotificationNumber>
        <AccountCircleIcon sx={{ fontSize: 35 }} />
      </UserButton>
    </Box>
  )
};

export default UserSection;
