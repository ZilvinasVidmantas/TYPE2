import React from 'react';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material';
import useAnimDelay from './use-anim-delay';
import { getCurrentBreakpoints } from '../../../helpers/index';

const getShouldProgress = (breakpoints, progressive) => {
  let shouldProgress = false;
  if (progressive) {
    const currentBreakpoints = getCurrentBreakpoints(breakpoints);

    for (let ii = 0; ii < currentBreakpoints.length; ii += 1) {
      const [brName] = currentBreakpoints[ii];
      if (progressive[brName]) {
        shouldProgress = progressive[brName];
        break;
      }
    }
  }
  return shouldProgress;
};

const SlideOnMount = React.forwardRef(
  ({ direction, children, progressive }, ref) => {
    const theme = useTheme();
    const breakpoints = theme.breakpoints.values;

    const shouldProgress = getShouldProgress(breakpoints, progressive);
    const show = useAnimDelay(shouldProgress);

    return (
      <Slide direction={direction} in={show} container={ref.current}>
        {children}
      </Slide>
    );
  },
);

export default SlideOnMount;
