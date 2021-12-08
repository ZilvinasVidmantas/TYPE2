import React from 'react';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavLink = ({ style, ...props }) => {
	const theme = useTheme();

	return (
		<NavLink
			{...props}
			style={({ isActive }) => ({
				display: 'flex',
				alignItems: 'center',
				color: theme.palette.common.white,
				textDecoration: 'none',
				padding: theme.spacing(2),
				boxShadow: isActive ? `0 4px 0 ${theme.palette.common.white}` : 'none',
				...style,
				'&:hover': {
					color: 'red',
					background: theme.palette.action.hover,
				},
			})}
		/>
	);
};

export default StyledNavLink;
