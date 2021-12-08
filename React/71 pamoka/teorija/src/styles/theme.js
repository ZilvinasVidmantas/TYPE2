import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	// Čia turėtų būti bendri nustatymai
});

export const lightTheme = createTheme(theme, {
	mixins: {
		toolbar: {
			minHeight: 0,
			height: 64,
			[`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
				minHeight: 0,
			},
			[theme.breakpoints.up('sm')]: {
				minHeight: 0,
			},
		},
	},
});
