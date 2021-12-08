import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	display: 'flex',
	textDecoration: 'none',
	width: '100%',
	color: theme.palette.common.black,
	'&.active': {
		paddingLeft: 4,
		boxShadow: `-2px 0 0 0 ${theme.palette.primary.main}`,
	},

	[theme.breakpoints.up('md')]: {
		alignItems: 'center',
		color: theme.palette.common.white,
		padding: theme.spacing(2),
		width: 'auto',
		':hover': {
			background: theme.palette.action.hover,
		},
		'&.active': {
			boxShadow: `inset 0 -2px 0 ${theme.palette.common.white}`,
		},
	},
}));

export default StyledNavLink;

/**
 * Sugalvoti logiką, kaip perpanaudoti ekrano dydžius, jog vienoje vietoje pakeitus
 * dydį, nuo kurio navbar'as tampa "desktop" tipo, pasikeistu visi nustatymai
 */



