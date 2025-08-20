import { createTheme, Shadows, ThemeOptions } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material/styles/createThemeNoVars';

import { themeType } from '../types';

export const themeIsDark = (type?: keyof typeof themeType) => {
  if (!type) {
    return false;
  }

  if ([themeType.dark].some((item) => item === type)) {
    return true;
  }

  return false;
};

// @ts-ignore
export const getCommonTypography = (type?: keyof typeof themeType): Pick<ThemeOptions, 'typography'> => {
  const family = ['Manrope', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', ');

  return {
    typography: {
      fontFamily: family,
      fontSize: 16,
      htmlFontSize: 16,
    },
  };
};

export const getCommonShadow = (type?: keyof typeof themeType): Pick<ThemeOptions, 'shadows'> => {
  const { shadows } = createTheme();

  shadows.splice(-2, 2);

  const onGetThemeShadows = () => {
    if (themeIsDark(type)) {
      return [
        '0 2px 4px -1px rgba(255, 255, 255, 0.2), 0 4px 5px 0 rgba(255, 255, 255, 0.14), 0 1px 10px 0 rgba(255, 255, 255, 0.12)',
        '0 3px 1px -2px rgba(255, 255, 255, 0.2), 0 2px 2px 0 rgba(255, 255, 255, 0.14), 0 1px 5px 0 rgba(255, 255, 255, 0.12)',
      ];
    }

    return [
      '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
      '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    ];
  };

  return {
    shadows: [...shadows, ...onGetThemeShadows()] as any as Shadows,
  };
};

export const getCommonComponents = (type?: keyof typeof themeType): Pick<ThemeOptions, 'components'> => {
  const getThemeComponents = (): Components<Omit<Theme, 'components'>> => {
    return {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontSize: 16,
            background: themeIsDark(type) ? '#333' : '#EFF7FF',
          },
        },
      },
    };
  };

  return {
    components: {
      MuiFab: {
        defaultProps: {
          size: 'small',
          variant: 'extended',
          sx: {
            width: 1,
            borderRadius: 2,
            textTransform: 'none',
            padding: 1,
            lineHeight: 1,
            fontSize: 14,
          },
        },
      },
      MuiCollapse: {
        defaultProps: {
          unmountOnExit: true,
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            transform: 'none',
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          MenuProps: {
            disableScrollLock: true,
          },
        },
      },
      MuiMenu: {
        defaultProps: {
          disableScrollLock: true,
        },
        styleOverrides: {
          list: {
            padding: 0,
          },
        },
      },
      MuiPopper: {
        defaultProps: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 2],
              },
            },
          ],
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          size: 'medium',
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          size: 'medium',
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: 'contained',
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: '500',
            borderRadius: '8px',
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            userSelect: 'none',
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h2',
            h4: 'h3',
            h5: 'h3',
            h6: 'h3',
            body1: 'span',
            body2: 'p',
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            '&.MuiInputBase-root': {
              borderRadius: '8px',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: 12,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            '&.MuiPaper-root': {
              borderRadius: '8px',
            },
          },
        },
      },
      ...getThemeComponents(),
    },
  };
};

export const getCommonPalette = (type?: keyof typeof themeType): Pick<ThemeOptions, 'palette'> => {
  const getThemeAwareColor = (
    defaultColor: string,
    options?: {
      darkVariant?: string;
    },
  ) => {
    switch (type) {
      case themeType.dark:
        return options?.darkVariant ?? defaultColor;
      case themeType.light:
      default:
        return defaultColor;
    }
  };

  return {
    palette: {
      mode: themeIsDark(type) ? 'dark' : 'light',
      common: {
        black: getThemeAwareColor('#0B0B0B', { darkVariant: '#000000' }),
        white: '#FFFFFF',
      },
      background: {
        default: getThemeAwareColor('#FFFFFF', { darkVariant: '#121212' }),
      },
      text: {
        primary: getThemeAwareColor('#0B0B0B', { darkVariant: '#FFFFFF' }),
        secondary: getThemeAwareColor('#5C5C5C', { darkVariant: '#BDBDBD' }),
      },
      primary: {
        main: '#2196F3',
        light: '#42A5F5',
      },
      secondary: {
        main: '#3D4756',
        light: '#BDBDBD',
      },
      error: {
        main: '#E50202',
        contrastText: getThemeAwareColor('#5F2120', { darkVariant: '#FFEBEE' }),
        light: getThemeAwareColor('#FDEDED', { darkVariant: '#FFCDD2' }),
      },
      customDivider: {
        main: getThemeAwareColor('#CECECE', { darkVariant: '#424242' }),
      },
      customWarning: {
        main: '#EF6C00',
        contrastText: '#663C00',
        light: '#FF9800',
      },
      purple: {
        main: '#9C27B0',
      },
      deepBlue: {
        main: '#014361',
      },
      lightGray: {
        main: '#BDBDBD',
      },
      lightBlue: {
        main: '#eff7ff',
      },
    },
  };
};
