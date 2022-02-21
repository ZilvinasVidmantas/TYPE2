import { Palette, PaletteColor } from '@mui/material';
import { SubTypeProps } from '../types/ts-helpers';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    facebook: PaletteColor;
    twitter: PaletteColor;
  }

  interface PaletteOptions {
    facebook?: PaletteColor;
    twitter?: PaletteColor;
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    footer: {
      minHeight: CSSProperties
    };
  }
}

export type PaletteColorNames = SubTypeProps<Palette, PaletteColor>;
