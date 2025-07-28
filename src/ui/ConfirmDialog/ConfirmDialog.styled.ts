import { css, Dialog, styled } from '@mui/material';

export const StyledConfirmDialog = styled(Dialog)(
  () => css`
    .MuiDialogActions-spacing {
      padding: 16px 24px;
    }
  `,
);
