import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)(({ theme }) => ({
	height: '100%',
	padding: theme.spacing(2, 0),
	'&>img': {
		height: '100%',
	},
}));

const Logo = (props) => {
	return (
		<LogoContainer to="/" {...props}>
			<img src="/logo.png" alt="page logo" />
		</LogoContainer>
	);
};

export default Logo;
