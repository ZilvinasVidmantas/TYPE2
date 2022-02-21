import {
  Paper,
  styled,
} from '@mui/material';
import { PaletteColorNames } from '../../../theme/theme-types';

type AdditionalProps = { bgcolor?: PaletteColorNames };

const CardContainer = styled(Paper)<AdditionalProps>(({ theme, bgcolor }) => ({
  width: 200,
  borderRadius: 4,
  display: 'inline-block',
  backgroundColor: bgcolor && theme.palette[bgcolor].main,
}));

export default CardContainer;
