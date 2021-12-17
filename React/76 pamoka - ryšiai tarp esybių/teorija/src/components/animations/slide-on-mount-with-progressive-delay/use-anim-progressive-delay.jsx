import { useState, useEffect, useRef } from 'react';

let mountedComponentCount = 0;
const baseDelay = 500;
const additionalDelaySize = 250;

const useAnimProgressiveDelay = () => {
	const [show, setShow] = useState(false);
	const shouldAnimateRef = useRef(true);

	useEffect(() => {
		mountedComponentCount++;
		const delay = baseDelay + mountedComponentCount * additionalDelaySize;
		setTimeout(() => {
			if (shouldAnimateRef.current) {
				setShow(true);
			}
		}, delay);

		return () => {
			mountedComponentCount--;
			shouldAnimateRef.current = false;
		};
	}, []);

	return show;
};

export default useAnimProgressiveDelay;
