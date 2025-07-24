import React, { FC, ReactNode } from 'react';

import { alpha, Typography, TypographyProps, useTheme } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { OverridableStringUnion } from '@mui/types';

import { TextUiType } from './Text.types.ts';
import { UiTypeProps } from '../../types';

export interface TextProps extends TypographyProps, UiTypeProps<typeof TextUiType> {
  children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
  const { children, uiType, color, ...otherProps } = props;

  const theme = useTheme();

  const onGetStyles = (
    fontSize: number | string,
    fontWeight: number | string,
    customColor: string,
    alphaOpacity?: number,
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>,
    lineHeight?: number,
  ): TypographyProps => {
    return {
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: lineHeight ?? 1.3,
      color: (color ?? !alphaOpacity) ? customColor : `${alpha(customColor, alphaOpacity)}`,
      variant: variant ?? 'body2',
      ...otherProps,
    };
  };

  if (!uiType) {
    return (
      <Typography color={color} {...otherProps}>
        {children}
      </Typography>
    );
  }

  const config: Record<keyof typeof TextUiType, TypographyProps> = {
    [TextUiType.title_27_400_primary_037]: onGetStyles(27, 400, theme.palette.text.primary, 0.37, 'h5'),
    [TextUiType.title_24_600_primary]: onGetStyles(24, 600, theme.palette.text.primary),
    [TextUiType.title_20_600_primary]: onGetStyles(20, 600, theme.palette.text.primary),
    [TextUiType.title_20_600_primary_087]: onGetStyles(20, 600, theme.palette.text.primary, 0.87),
    [TextUiType.subtitle_16_700_primary_087]: onGetStyles(16, 700, theme.palette.text.primary, 0.87),
    [TextUiType.subtitle_16_600_primary]: onGetStyles(16, 600, theme.palette.text.primary),
    [TextUiType.subtitle_16_600_primary_087]: onGetStyles(16, 600, theme.palette.text.primary, 0.87),
    [TextUiType.subtitle_16_500_primary_087]: onGetStyles(16, 500, theme.palette.text.primary, 0.87),
    [TextUiType.subtitle_16_400_primary]: onGetStyles(16, 400, theme.palette.text.primary),
    [TextUiType.subtitle_16_400_primary_087]: onGetStyles(16, 400, theme.palette.text.primary, 0.87),
    [TextUiType.subtitle_16_400_grey_500]: onGetStyles(16, 400, theme.palette.grey['500']),
    [TextUiType.subtitle_16_400_primary_037]: onGetStyles(16, 400, theme.palette.text.primary, 0.37),
    [TextUiType.text_14_400_primary_087]: onGetStyles(14, 400, theme.palette.text.primary, 0.87),
    [TextUiType.text_14_500_primary_06]: onGetStyles(14, 500, theme.palette.text.primary, 0.6),
    [TextUiType.text_14_400_primary_06]: onGetStyles(14, 400, theme.palette.text.primary, 0.6),
    [TextUiType.text_12_400_primary_087]: onGetStyles(12, 400, theme.palette.text.primary, 0.87),
    [TextUiType.text_12_400_primary_06]: onGetStyles(12, 400, theme.palette.text.primary, 0.6),
    [TextUiType.text_10_400_lightGray]: onGetStyles(10, 400, theme.palette.lightGray.main),
    [TextUiType.text_10_400_white]: onGetStyles(10, 400, theme.palette.common.white),
    [TextUiType.text_10_400_black]: onGetStyles(10, 400, theme.palette.common.black),
    [TextUiType.text_6_400_lightGray]: onGetStyles(6, 400, theme.palette.lightGray.main),
  };

  return <Typography {...config[uiType]}>{children}</Typography>;
};
