import { alpha, Box, css, Dialog, IconButton, styled } from '@mui/material';

export const StyledModalDialog = styled(Dialog)(() => {
  return css`
    .MuiPaper-root {
      overflow-y: visible;
    }
  `;
});

export const StyledModalIconButton = styled(IconButton)(
  ({ theme }) => css`
    position: absolute;
    right: 14px;
    top: 10px;
    color: ${theme.palette.grey[500]};
    z-index: ${theme.zIndex.tooltip + 1};

    svg {
      font-size: 24px;
    }
  `,
);

export const StyledModalBox = styled(Box)(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${alpha(theme.palette.background.default, 0.2)};
    backdrop-filter: blur(3px);
    border-radius: 8px;
    overflow: hidden;
    z-index: ${theme.zIndex.tooltip};
  `,
);
