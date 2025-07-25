import React, { FC } from 'react';

import { Box, BoxProps, FormHelperText } from '@mui/material';

export interface CharactersProps {
  maxLength?: number;
  isError?: boolean;
  currentLength?: number;
  boxProps?: BoxProps;
  text?: string;
}

export const Characters: FC<CharactersProps> = (props) => {
  const { boxProps, maxLength, currentLength, isError, text } = props;

  if (!maxLength) {
    return null;
  }

  return (
    <Box {...boxProps} paddingLeft={boxProps?.paddingLeft ?? 1.75}>
      <FormHelperText error={isError} sx={{ mt: 0 }}>
        {`${currentLength ?? 0}/${maxLength ?? 0} ${text}`}
      </FormHelperText>
    </Box>
  );
};
