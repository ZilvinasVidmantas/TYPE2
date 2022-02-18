import {
  Paper,
  styled,
  PaperProps,
} from '@mui/material';
import { PaletteColorNames } from '../types/theme-types';

type CardContainerProps = PaperProps & { bgcolor?: PaletteColorNames };

type CardContainerType = React.FC<CardContainerProps>;

const CardContainer = styled(Paper)<CardContainerProps>(({ theme, bgcolor }) => ({
  width: 200,
  borderRadius: 4,
  display: 'inline-block',
  backgroundColor: bgcolor && theme.palette[bgcolor].main,
})) as CardContainerType;

export default CardContainer;
