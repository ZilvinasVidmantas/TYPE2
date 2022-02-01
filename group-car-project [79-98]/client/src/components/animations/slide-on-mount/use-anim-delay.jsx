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
        mountedComponentCount += 1;
        delay += mountedComponentCount * additionalDelaySize;
      }
      setTimeout(() => {
        if (shouldAnimateRef.current) {
          setShow(true);
        }
      }, delay);

      return () => {
        if (shouldProgress) {
          mountedComponentCount -= 1;
        }
        shouldAnimateRef.current = false;
      };
    },
    [shouldProgress],
  );

  return show;
};

export default useAnimDelay;
