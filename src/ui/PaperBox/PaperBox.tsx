import React, { FC, ReactNode } from 'react';

import { Paper, PaperProps, SxProps, Theme } from '@mui/material';

export interface PaperBoxProps {
  children: ReactNode;
  maxWidth?: number | string;
  padding?: number | string;
  sx?: SxProps<Theme> | undefined;
  paperProps?: PaperProps;
}

export const PaperBox: FC<PaperBoxProps> = (props) => {
  const { children, paperProps, sx, padding, maxWidth } = props;

  return (
    <Paper
      elevation={0}
      {...paperProps}
      sx={{
        borderRadius: 1,
        width: 1,
        maxWidth: maxWidth ?? 1,
        padding: padding ?? 2,
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};
