import React, { FC } from 'react';

import { Box, BoxProps, CircularProgress } from '@mui/material';

import { StyledLoader } from './Loader.styled.ts';
import { LoaderUiType } from './Loader.types.ts';
import { Text } from '../Text';
import { UiTypeProps } from '../../types';

export interface LoaderProps extends UiTypeProps<typeof LoaderUiType> {
  boxProps?: BoxProps;
  height?: string | number;
  maxWidth?: string | number;
  withText?: boolean;
  size?: number;
  text?: string;
}

const HEIGHT = 300;

export const Loader: FC<LoaderProps> = ({
  text,
  boxProps,
  height,
  withText,
  maxWidth,
  uiType,
  size = 48,
}: LoaderProps) => {
  switch (uiType) {
    case LoaderUiType.circle:
      return (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={0.5}
          maxWidth={maxWidth ?? 1}
          height={height ?? HEIGHT}
          {...boxProps}
        >
          <CircularProgress size={size} disableShrink />
          {withText && <Text uiType={'text_12_400_primary_06'}>{text}</Text>}
        </Box>
      );
    case LoaderUiType.default:
    default:
      return (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={0.5}
          maxWidth={maxWidth ?? 1}
          height={height ?? HEIGHT}
          {...boxProps}
        >
          <StyledLoader size={size} />
          {withText && <Text uiType={'text_12_400_primary_06'}>{text}</Text>}
        </Box>
      );
  }
};
