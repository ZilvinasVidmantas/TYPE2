import { Box, styled, CardProps } from '@mui/material';

export type CardContainerProps = CardProps & {
  verticalFlip?: boolean,
};

const CardContainer = styled(Box)<CardContainerProps>(({ theme, verticalFlip }) => ({
  perspective: 600,
  ':hover>.card': {
    transform: `rotate${verticalFlip ? 'X' : 'Y'}(-180deg)`,
  },
  '&>.card': {
    transformStyle: 'preserve-3d',
    position: 'relative',
    height: '100%',
    width: '100%',
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.slow,
    }),
  },
  '& .front, & .back': {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    '&>*': {
      height: '100%',
      width: '100%',
    },
  },
  '& .front': {
    backgroundColor: 'red',
  },
  '& .back': {
    transform: `rotate${verticalFlip ? 'X' : 'Y'}(180deg)`,
    backgroundColor: 'blue',
  },
}));

export default CardContainer;
