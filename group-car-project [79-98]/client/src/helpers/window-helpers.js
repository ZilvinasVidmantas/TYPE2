export const getWindowWidth = () => Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0,
);

export const getCurrentBreakpoints = (breakpoints) => {
  const vw = getWindowWidth();
  const sortedBreakpoints = Object.entries(breakpoints).sort(
    (a, b) => b[1] - a[1],
  );

  const largestBreakpointIndex = sortedBreakpoints.findIndex(
    // eslint-disable-next-line no-unused-vars
    ([_, brValue]) => vw > brValue,
  );

  return sortedBreakpoints.slice(largestBreakpointIndex);
};
