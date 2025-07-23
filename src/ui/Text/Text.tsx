import React, { FC } from 'react';

import { alpha, Typography as TypographyMui, TypographyProps as TypographyPropsMui, useTheme } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { OverridableStringUnion } from '@mui/types';

import { TextUiType } from './Text.types.ts';
import { UiTypeProps } from '../../types';

export interface TextProps extends TypographyPropsMui, UiTypeProps<typeof TextUiType> {
  children: React.ReactNode;
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
  ): TypographyPropsMui => {
    return {
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: lineHeight ?? 1.3,
      color: (color ?? !alphaOpacity) ? customColor : `${alpha(customColor, alphaOpacity)}`,
      variant: variant ?? 'body2',
      ...otherProps,
    };
  };

  switch (uiType) {
    case TextUiType.title_27_400_primary_037:
      return (
        <TypographyMui {...onGetStyles(27, 400, theme.palette.text.primary, 0.37, 'h5')}>{children}</TypographyMui>
      );
    case TextUiType.title_24_600_primary:
      return <TypographyMui {...onGetStyles(24, 400, theme.palette.text.primary)}>{children}</TypographyMui>;
    case TextUiType.title_20_600_primary:
      return <TypographyMui {...onGetStyles(20, 600, theme.palette.text.primary)}>{children}</TypographyMui>;
    case TextUiType.title_20_600_primary_087:
      return <TypographyMui {...onGetStyles(20, 600, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_700_primary_087:
      return <TypographyMui {...onGetStyles(16, 700, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_600_primary:
      return <TypographyMui {...onGetStyles(16, 600, theme.palette.text.primary)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_600_primary_087:
      return <TypographyMui {...onGetStyles(16, 600, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_500_primary_087:
      return <TypographyMui {...onGetStyles(16, 500, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_400_primary:
      return <TypographyMui {...onGetStyles(16, 400, theme.palette.text.primary)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_400_primary_087:
      return <TypographyMui {...onGetStyles(16, 400, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_400_grey_500:
      return <TypographyMui {...onGetStyles(16, 400, theme.palette.grey['500'])}>{children}</TypographyMui>;
    case TextUiType.subtitle_16_400_primary_037:
      return <TypographyMui {...onGetStyles(16, 400, theme.palette.text.primary, 0.37)}>{children}</TypographyMui>;
    case TextUiType.text_14_400_primary_087:
      return <TypographyMui {...onGetStyles(14, 400, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.text_14_500_primary_06:
      return <TypographyMui {...onGetStyles(14, 500, theme.palette.text.primary, 0.6)}>{children}</TypographyMui>;
    case TextUiType.text_14_400_primary_06:
      return <TypographyMui {...onGetStyles(14, 400, theme.palette.text.primary, 0.6)}>{children}</TypographyMui>;
    case TextUiType.text_12_400_primary_087:
      return <TypographyMui {...onGetStyles(12, 400, theme.palette.text.primary, 0.87)}>{children}</TypographyMui>;
    case TextUiType.text_12_400_primary_06:
      return <TypographyMui {...onGetStyles(12, 400, theme.palette.text.primary, 0.6)}>{children}</TypographyMui>;
    case TextUiType.text_10_400_lightGray:
      return <TypographyMui {...onGetStyles(10, 400, theme.palette.lightGray.main)}>{children}</TypographyMui>;
    case TextUiType.text_10_400_white:
      return <TypographyMui {...onGetStyles(10, 400, theme.palette.common.white)}>{children}</TypographyMui>;
    case TextUiType.text_10_400_black:
      return <TypographyMui {...onGetStyles(10, 400, theme.palette.common.black)}>{children}</TypographyMui>;
    case TextUiType.text_6_400_lightGray:
      return <TypographyMui {...onGetStyles(6, 400, theme.palette.lightGray.main)}>{children}</TypographyMui>;
    default:
      return (
        <TypographyMui color={color} {...otherProps}>
          {children}
        </TypographyMui>
      );
  }
};
