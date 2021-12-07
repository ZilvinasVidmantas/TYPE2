import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarProvider } from './contexts/car-context';
import HomePage from './pages/home-page';
import CarSearch from './pages/car-search-page';
import CarPage from './pages/car-page';

const App = () => {
	return (
		<CarProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/search' element={<CarSearch />} />
					<Route path='/car' element={<CarPage />} />
				</Routes>
			</BrowserRouter>
		</CarProvider>
	);
};

export default App;
