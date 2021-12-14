import React, { createContext } from 'react';

const AnimProgressiveContext = createContext();

let mountedComponentCount = 0;
const baseDelay = 500;
const additionalDelaySize = 500;

class ProviderValue {
	get delay() {
		return baseDelay + additionalDelaySize * mountedComponentCount++;
	}
}

const value = new ProviderValue();

export const AnimProgressiveProvider = ({ children }) => {
	return (
		<AnimProgressiveContext.Provider value={value}>
			{children}
		</AnimProgressiveContext.Provider>
	);
};

export default AnimProgressiveContext;
