import React, { FC, ReactNode } from 'react';

import { Box, BoxProps } from '@mui/material';

export interface MainBoxProps {
  children?: ReactNode;
  boxProps?: BoxProps;
}

export const MainBox: FC<MainBoxProps> = (props) => {
  const { boxProps, children } = props;

  return (
    <Box p={2.5} {...boxProps}>
      {children}
    </Box>
  );
};
