import { ThemeOptions } from '@mui/material';

import { getCommonComponents, getCommonPalette, getCommonShadow, getCommonTypography } from './theme.common.ts';
import { themeType } from '../types';

export const getTheme = (type?: keyof typeof themeType): ThemeOptions => {
  return {
    ...getCommonTypography(type),
    ...getCommonShadow(type),
    ...getCommonComponents(type),
    ...getCommonPalette(type),
  };
};
