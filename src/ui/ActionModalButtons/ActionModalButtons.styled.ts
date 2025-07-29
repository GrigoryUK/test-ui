import { css, DialogActions, styled } from '@mui/material';

export const StyledActionModalButtonsDialogActions = styled(DialogActions)(
  () => css`
    &.default {
      padding: 8px 24px 16px;
      gap: 12px;
    }
  `,
);
