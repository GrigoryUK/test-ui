import React from 'react';

import { alpha, Backdrop, CircularProgress } from '@mui/material';

export const BackdropLoading = () => {
  return (
    <Backdrop
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.common.black, 0.05),
        color: theme.palette.common.white,
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
