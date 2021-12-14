import React, { createContext } from 'react';

const AnimProgressiveContext = createContext();

let mountedComponentCount = 0;
const baseDelay = 500;
const additionalDelaySize = 500;

const delayGetter = {};
Object.defineProperty(delayGetter, 'delay', {
	configurable: false,
  enumerable: false,
	get() {
		return baseDelay + additionalDelaySize * mountedComponentCount++;
	},
});

export const AnimProgressiveProvider = ({ children }) => {
	return (
		<AnimProgressiveContext.Provider value={delayGetter}>
			{children}
		</AnimProgressiveContext.Provider>
	);
};

export default AnimProgressiveContext;
