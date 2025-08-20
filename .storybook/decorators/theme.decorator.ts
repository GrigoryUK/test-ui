import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { getTheme } from '../../src';

export const onGetThemeDecorator = () => {
  const light = createTheme({ ...getTheme('light') });

  const dark = createTheme({ ...getTheme('dark') });

  return withThemeFromJSXProvider({
    themes: {
      light: light,
      dark: dark,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  });
};
