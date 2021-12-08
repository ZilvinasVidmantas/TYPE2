import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	color: theme.palette.common.white,
	textDecoration: 'none',
	padding: theme.spacing(2),
	':hover': {
		background: theme.palette.action.hover,
	},
	'&.active': {
		boxShadow: `inset 0 -2px 0 ${theme.palette.common.white}`,
	},
}));

export default StyledNavLink;



