import React, { createContext } from 'react';

const AnimProgressiveContext = createContext();

let mountedComponentCount = 0;
const baseDelay = 500;
const additionalDelaySize = 500;

const nextDelay = () =>
	baseDelay + additionalDelaySize * mountedComponentCount++;

export const AnimProgressiveProvider = ({ children }) => {
	return (
		<AnimProgressiveContext.Provider value={nextDelay}>
			{children}
		</AnimProgressiveContext.Provider>
	);
};

export default AnimProgressiveContext;
