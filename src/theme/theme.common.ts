import { createTheme, Shadows, ThemeOptions } from '@mui/material';

import { themeType } from '../types';

export const onGetCommonTypography = (type?: keyof typeof themeType): Pick<ThemeOptions, 'typography'> => {
  const family = ['Manrope', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', ');

  switch (type) {
    case themeType.advertiserDark:
    case themeType.advertiser:
    default:
      return {
        typography: { fontFamily: family, fontSize: 16, htmlFontSize: 16 },
      };
  }
};

export const onGetCommonShadow = (type?: keyof typeof themeType): Pick<ThemeOptions, 'shadows'> => {
  const { shadows } = createTheme();

  shadows.splice(-2, 2);

  switch (type) {
    case themeType.advertiserDark:
      return {
        shadows: [
          ...shadows,
          '0 2px 4px -1px rgba(255, 255, 255, 0.2), 0 4px 5px 0 rgba(255, 255, 255, 0.14), 0 1px 10px 0 rgba(255, 255, 255, 0.12)',
          '0 3px 1px -2px rgba(255, 255, 255, 0.2), 0 2px 2px 0 rgba(255, 255, 255, 0.14), 0 1px 5px 0 rgba(255, 255, 255, 0.12)',
        ] as any as Shadows,
      };
    case themeType.advertiser:
    default:
      return {
        shadows: [
          ...shadows,
          '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
          '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        ] as any as Shadows,
      };
  }
};

export const onGetCommonComponents = (type?: keyof typeof themeType): Pick<ThemeOptions, 'components'> => {
  switch (type) {
    case themeType.advertiserDark:
    case themeType.advertiser:
    default:
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
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                fontSize: 16,
                background: '#EFF7FF',
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
        },
      };
  }
};

export const onGetCommonPalette = (type?: keyof typeof themeType): Pick<ThemeOptions, 'palette'> => {
  switch (type) {
    case themeType.advertiserDark:
    case themeType.advertiser:
    default:
      return {
        palette: {
          common: {
            black: '#0B0B0B',
          },
          background: {
            default: '#ffffff',
          },
          text: {
            primary: '#0B0B0B',
            secondary: '#5C5C5C',
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
            main: '#2E7D32',
          },
          error: {
            main: '#E50202',
          },
          customDivider: {
            main: '#cecece',
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
        },
      };
  }
};
