import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { onGetTheme } from '../../src';

export const onGetThemeDecorator = () => {
  const advertiser = createTheme({ ...onGetTheme('advertiser') });

  const advertiserDark = createTheme({ ...onGetTheme('advertiserDark') });

  const operator = createTheme({ ...onGetTheme() });

  return withThemeFromJSXProvider({
    themes: {
      advertiser: advertiser,
      advertiserDark: advertiserDark,
      operator: operator,
    },
    defaultTheme: 'advertiser',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  });
};
