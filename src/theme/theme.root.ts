import { ThemeOptions } from '@mui/material';

import { onGetCommonComponents, onGetCommonPalette, onGetCommonShadow, onGetCommonTypography } from './theme.common.ts';
import { themeType } from '../types';

export const onGetTheme = (type?: keyof typeof themeType): ThemeOptions => {
  return {
    ...onGetCommonPalette(type),
    ...onGetCommonTypography(type),
    ...onGetCommonShadow(type),
    ...onGetCommonComponents(type),
  };
};
