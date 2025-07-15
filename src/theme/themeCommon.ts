import {createTheme, Shadows, ThemeOptions} from '@mui/material';

const family = ['Manrope', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', ');

const { shadows } = createTheme();

shadows.splice(-2, 2);


export const commonTypography: Pick<ThemeOptions, 'typography'>= {
    typography: { fontFamily: family, fontSize: 16, htmlFontSize: 16 },

}

export const commonShadow: Pick<ThemeOptions, 'shadows'>= {
    shadows: [
        ...shadows,
        '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    ] as any as Shadows,
}


export const commonComponents: Pick<ThemeOptions, 'components'>= {
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
                styleOverrides: {
                    root: ({ theme }) => ({
                        '& input:-webkit-autofill': {
                            WebkitBoxShadow:
                                theme.palette.mode === 'dark' ? '0 0 0 100px #121212 inset' : '0 0 0 100px #ffffff inset',
                            WebkitTextFillColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                        },
                    }),
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
}


