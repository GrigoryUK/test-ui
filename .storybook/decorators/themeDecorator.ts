
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { getThemeAdvertiser } from '../../src/theme/themeAdvertiser';
import { getThemeOperator } from '../../src/theme/themeOperator';
import { getThemeAdvertiserDark } from '../../src/theme/themeAdvertiserDark';

export const getThemeDecorator = () => {

    const themeAdvertiser = createTheme({...getThemeAdvertiser()});

    const themeAdvertiserDark = createTheme({...getThemeAdvertiserDark()});

    const themeOperator = createTheme({...getThemeOperator()});

    return  withThemeFromJSXProvider({
    themes: {
      themeAdvertiser: themeAdvertiser,
      themeAdvertiserDark: themeAdvertiserDark,
      themeOperator: themeOperator,
    },
    defaultTheme: 'themeAdvertiser',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  });
}