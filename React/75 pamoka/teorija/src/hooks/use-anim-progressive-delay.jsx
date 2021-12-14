import { useState, useEffect } from 'react';

let mountedComponentCount = 0;
const baseDellay = 500;
const additionalDellaySize = 500;

const useAnimProgressiveDelay = () => {
	const [delay, setDellay] = useState(0);

	useEffect(() => {
		mountedComponentCount++;
		setDellay(baseDellay + mountedComponentCount * additionalDellaySize);
		return () => {
			mountedComponentCount--;
		};
	}, []);

	return delay;
};

export default useAnimProgressiveDelay;
