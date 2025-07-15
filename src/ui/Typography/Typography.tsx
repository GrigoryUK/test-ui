import React, { FC } from 'react';

import { alpha, Typography as TypographyMui, TypographyProps, useTheme } from '@mui/material';

import { ETypographyType } from './Typography.types.ts';

export interface ITypography extends TypographyProps {
  children: React.ReactNode;
  type?: ETypographyType;
}

export const Typography: FC<ITypography> = (props) => {
  const { children, type, color, ...otherProps } = props;

  const theme = useTheme();

  switch (type) {
    case ETypographyType.title_27_400_primary_037:
      return (
        <TypographyMui
          color={color ?? `${alpha(theme.palette.text.primary, 0.37)}`}
          fontWeight={400}
          lineHeight={1.3}
          fontSize={27}
          variant={'h5'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case ETypographyType.title_24_600_primary:
      return (
        <TypographyMui
          color={color ?? theme.palette.text.primary}
          fontWeight={600}
          lineHeight={1.3}
          fontSize={24}
          variant={'body2'}
          {...otherProps}
        >
          {children}
        </TypographyMui>
      );
    case ETypographyType.title_20_600_primary:
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
    case ETypographyType.title_20_600_primary_087:
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
    case ETypographyType.subtitle_16_700_primary_087:
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
    case ETypographyType.subtitle_16_600_primary:
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
    case ETypographyType.subtitle_16_600_primary_087:
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
    case ETypographyType.subtitle_16_400_primary:
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
    case ETypographyType.subtitle_16_500_primary_087:
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
    case ETypographyType.subtitle_16_400_primary_087:
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
    case ETypographyType.subtitle_16_400_grey_500:
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
    case ETypographyType.subtitle_16_400_primary_037:
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
    case ETypographyType.text_14_400_primary_087:
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
    case ETypographyType.text_14_500_primary_06:
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
    case ETypographyType.text_14_400_primary_06:
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
    case ETypographyType.text_12_400_primary_087:
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
    case ETypographyType.text_12_400_primary_06:
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
    case ETypographyType.text_10_400_secondary:
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
    case ETypographyType.text_10_400_white:
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
    case ETypographyType.text_10_400_black:
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
    case ETypographyType.text_6_400_secondary:
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
