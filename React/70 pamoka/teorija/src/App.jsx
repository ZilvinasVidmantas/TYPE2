import React from 'react';
import CarPage from './pages/car-page';
import { CarProvider } from './contexts/car-context';

const App = () => {
  return (
    <CarProvider>
      <CarPage />
    </CarProvider>
  )
}

export default App;
