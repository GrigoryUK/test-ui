import { Palette as MuiPalette, PaletteOptions as MuiPaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customDivider: MuiPalette['primary'];
    purple: MuiPalette['primary'];
    deepBlue: MuiPalette['primary'];
    customWarning: MuiPalette['primary'];
    lightGray: MuiPalette['primary'];
    lightBlue: MuiPalette['primary'];
  }

  interface PaletteOptions {
    customDivider: MuiPaletteOptions['primary'];
    purple: MuiPaletteOptions['primary'];
    deepBlue: MuiPaletteOptions['primary'];
    customWarning: MuiPaletteOptions['primary'];
    lightGray: MuiPaletteOptions['primary'];
    lightBlue: MuiPaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
