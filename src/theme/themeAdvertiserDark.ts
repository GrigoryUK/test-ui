import { ThemeOptions} from "@mui/material";
import {commonComponents,  commonShadow, commonTypography} from "./themeCommon.ts";


const advertiserDarkPalette: Pick<ThemeOptions, 'palette'> = {
  palette: {
    mode: 'dark',
    common: {
      black: '#0B0B0B',
      white: '#ffffff',
    },
    background: {
      default: '#181A1B', 
      paper: '#23272A',   
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0B0B0',
    },
    primary: {
      main: '#2196F3',
      light: '#42A5F5',
    },
    secondary: {
      main: '#3D4756',
      light: '#BDBDBD',
    },
    success: {
      main: '#43A047', 
    },
    error: {
      main: '#FF5252', 
    },
    customDivider: {
      main: '#44474A', 
    },
    customWarning: {
      main: '#FFA726',
      contrastText: '#23272A',
      light: '#FFB74D',
    },
    purple: {
      main: '#BA68C8',
    },
    deepBlue: {
      main: '#1976D2',
    },
    lightGray: {
      main: '#757575',
    },
  },
};


export const getThemeAdvertiserDark = (): ThemeOptions => {
    return {
        ...commonTypography,
        ...advertiserDarkPalette,
        ...commonShadow,
        ...commonComponents,
    }
}
