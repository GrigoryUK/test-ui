import React, { FC } from 'react';

import { alpha, Typography as TypographyMui, TypographyProps as TypographyPropsMui, useTheme } from '@mui/material';

import { TypographyType } from './Typography.types.ts';
import {UiTypeProps} from "../../types";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {TypographyPropsVariantOverrides} from "@mui/material/Typography/Typography";

export interface TypographyProps extends TypographyPropsMui, UiTypeProps<typeof TypographyType> {
  children: React.ReactNode;
}

export const Typography: FC<TypographyProps> = (props) => {
  const { children, uiType, color, ...otherProps } = props;

  const theme = useTheme();

  const onGetStyles = ( fontSize: number | string, fontWeight: number | string, customColor: string,  alphaOpacity?: number, variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>): TypographyPropsMui => {

    return {
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: 1.3,
      color: color ?? `${alpha(customColor, alphaOpacity ?? 1)}`,
      variant: variant ?? 'body2',
      ...otherProps,
    }
  }


  switch (uiType) {
    case TypographyType.title_27_400_primary_037:

      return (
        <TypographyMui
            {...onGetStyles(27, 400, theme.palette.text.primary, 0.37, 'h5')}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.title_24_600_primary:
      return (
        <TypographyMui
            {...onGetStyles(24, 400, theme.palette.text.primary )}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.title_20_600_primary:
      return (
        <TypographyMui
          color={color ?? theme.palette.text.primary}
          fontWeight={600}
          lineHeight={1.3}
          fontSize={20}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.title_20_600_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          fontWeight={600}
          lineHeight={1.3}
          fontSize={20}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_700_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          fontWeight={700}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_600_primary:
      return (
        <TypographyMui
          color={color ?? theme.palette.text.primary}
          fontWeight={600}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_600_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          fontWeight={600}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_400_primary:
      return (
        <TypographyMui
          color={color ?? `${theme.palette.text.primary}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_500_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          fontWeight={500}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_400_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_400_grey_500:
      return (
        <TypographyMui
          color={color ?? `${theme.palette.grey['500']}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.subtitle_16_400_primary_037:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.37)}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={16}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_14_400_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          lineHeight={1.3}
          fontSize={14}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_14_500_primary_06:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.6)}`}
          fontWeight={500}
          lineHeight={1.3}
          fontSize={14}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_14_400_primary_06:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.6)}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={14}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_12_400_primary_087:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.87)}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={12}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_12_400_primary_06:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.6)}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={12}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_10_400_secondary:
      return (
        <TypographyMui
          color={color ?? `${theme.palette.lightGray.main}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={10}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_10_400_white:
      return (
        <TypographyMui
          color={color ?? `${theme.palette.common.white}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={10}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_10_400_black:
      return (
        <TypographyMui
          color={color ?? `${theme.palette.common.black}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={10}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case TypographyType.text_6_400_secondary:
      return (
        <TypographyMui
          color={color ?? `${theme.palette.lightGray.main}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={6}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    default:
      return (
        <TypographyMui color={color} {...otherProps}>
          {children}
        </TypographyMui>
      );
  }
};
