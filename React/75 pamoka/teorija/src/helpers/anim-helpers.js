let counter = 0;
const baseDelay = 500;
const additionalDelaySize = 500;

export const calcDelay = () => baseDelay + additionalDelaySize * counter++;