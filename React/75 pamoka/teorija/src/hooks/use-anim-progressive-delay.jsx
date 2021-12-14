import { useState, useEffect } from 'react';

let mountedComponentCount = 0;
const baseDellay = 500;
const additionalDellaySize = 500;

const useAnimProgressiveDelay = () => {
	const [delay, setDelay] = useState(0);

	useEffect(() => {
		mountedComponentCount++;
		setDelay(baseDellay + mountedComponentCount * additionalDellaySize);
		return () => {
			mountedComponentCount--;
		};
	}, []);

	return delay;
};

export default useAnimProgressiveDelay;
