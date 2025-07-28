import React, { FC, ReactNode } from 'react';

import { Box, BoxProps } from '@mui/material';

export interface ColumnBoxProps {
  children?: ReactNode;
  boxProps?: BoxProps;
}

export const ColumnBox: FC<ColumnBoxProps> = (props) => {
  const { boxProps, children } = props;

  return (
    <Box display={'flex'} flexDirection={'column'} gap={3} {...boxProps}>
      {children}
    </Box>
  );
};
