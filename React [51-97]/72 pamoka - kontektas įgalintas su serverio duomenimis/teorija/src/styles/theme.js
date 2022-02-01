import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
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
