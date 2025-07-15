import { ThemeOptions} from "@mui/material";
import {commonComponents,  commonShadow, commonTypography} from "./themeCommon.ts";


const advertiserPalette: Pick<ThemeOptions, 'palette'>= {
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
}


export const themeAdvertiser = (): ThemeOptions => {
    return {
        ...commonTypography,
        ...advertiserPalette,
        ...commonShadow,
        ...commonComponents,
    }
}
