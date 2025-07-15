import React, { FC } from 'react';

import { Box, BoxProps, CircularProgress } from '@mui/material';

import { StyledLoader } from './Loader.styled.ts';
import { LoaderUiType } from './Loader.types.ts';
import {UiTypeProps} from "../../types";
import { Typography} from "../Typography";

export interface LoaderProps extends UiTypeProps<typeof LoaderUiType> {
  text?: string;
  boxProps?: BoxProps;
  height?: string | number;
  maxWidth?: string | number;
  withText?: boolean;
  size?: number;
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
          {withText && (
            <Typography uiType={'text_12_400_primary_06'}>{text}</Typography>
          )}
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
          {withText && (
            <Typography uiType={'text_12_400_primary_06'}>{text}</Typography>
          )}
        </Box>
      );
  }
};
