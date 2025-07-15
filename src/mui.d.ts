import { Palette as MuiPalette, PaletteOptions as MuiPaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customDivider: MuiPalette['primary'];
    purple: MuiPalette['primary'];
    deepBlue: MuiPalette['primary'];
    customWarning: MuiPalette['primary'];
    lightGray: MuiPalette['primary'];
  }

  interface PaletteOptions {
    customDivider: MuiPaletteOptions['primary'];
    purple: MuiPaletteOptions['primary'];
    deepBlue: MuiPaletteOptions['primary'];
    customWarning: MuiPaletteOptions['primary'];
    lightGray: MuiPaletteOptions['primary'];
  }
}
