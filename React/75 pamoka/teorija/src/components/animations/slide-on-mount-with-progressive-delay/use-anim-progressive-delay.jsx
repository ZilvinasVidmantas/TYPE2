import { useState, useEffect, useRef } from 'react';

let mountedComponentCount = 0;
const baseDelay = 500;
const additionalDelaySize = 250;

const useAnimProgressiveDelay = () => {
	const [delay, setDelay] = useState(0);
	const shouldAnimateRef = useRef(true);

	useEffect(() => {
		mountedComponentCount++;
		const delay = baseDelay + mountedComponentCount * additionalDelaySize;
		setTimeout(() => {
			if (shouldAnimateRef.current) {
				setDelay(delay);
			}
		}, delay);

		return () => {
			mountedComponentCount--;
			shouldAnimateRef.current = false;
		};
	}, []);

	return Boolean(delay);
};

export default useAnimProgressiveDelay;
