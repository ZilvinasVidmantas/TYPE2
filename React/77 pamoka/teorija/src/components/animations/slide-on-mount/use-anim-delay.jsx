import { useState, useEffect, useRef } from 'react';

let mountedComponentCount = 0;
const baseDelay = 500;
const additionalDelaySize = 250;

const useAnimDelay = (shouldProgress) => {
	const [show, setShow] = useState(false);
	const shouldAnimateRef = useRef(true);

	useEffect(
		() => {
			let delay = baseDelay;
			if (shouldProgress) {
				delay += ++mountedComponentCount * additionalDelaySize;
			}
			setTimeout(() => {
				if (shouldAnimateRef.current) {
					setShow(true);
				}
			}, delay);

			return () => {
				if (shouldProgress) {
					mountedComponentCount--;
				}
				shouldAnimateRef.current = false;
			};
		},
		[shouldProgress],
	);

	return show;
};

export default useAnimDelay;
