import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    navbar: CSSProperties;
    drawer: CSSProperties;
  }
}

declare module '@mui/material/styles/createTransitions' {
  interface Duration {
    slow: number;
  }
}
