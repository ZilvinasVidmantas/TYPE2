import React from 'react';
import {
	BrowserRouter as RouterProvider,
	Routes,
	Route,
} from 'react-router-dom';
import { CarProvider } from './contexts/car-context';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './styles/theme';
import HomePage from './pages/home-page';
import CarSearch from './pages/car-search-page';
import CarPage from './pages/car-page';
import Navbar from './components/partials/navbar';

const App = () => {
	return (
		<CarProvider>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline>
					<RouterProvider>
						<Navbar />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/search" element={<CarSearch />} />
							<Route path="/car/:id" element={<CarPage />} />
						</Routes>
					</RouterProvider>
				</CssBaseline>
			</ThemeProvider>
		</CarProvider>
	);
};

export default App;
