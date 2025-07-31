import { alpha, Box, css, darken, lighten, styled } from '@mui/material';

export const StyledUploadFilesBox = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background: ${alpha(theme.palette.divider, 0.09)};
    border: 1px dashed ${alpha(theme.palette.divider, 0.37)};
    border-radius: 8px;
    cursor: pointer;
    transition: 0.1s ease;

    &:not(.disabled):hover {
      background: ${darken(theme.palette.divider, 0.02)};
    }

    &.disabled {
      user-select: none !important;
      cursor: default !important;
      background: ${lighten(theme.palette.customDivider.main, 0.5)};
    }

    &.error {
      border: 1px dashed ${theme.palette.error.main};
    }
  `,
);
