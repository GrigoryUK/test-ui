import { alpha, Box, css, styled } from '@mui/material';

export const StyledPaginationBox = styled(Box)(
  ({ theme }) => css`
    padding: 12px 30px;
    width: 100%;
    overflow-x: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: ${theme.palette.background.default};
    border-radius: 0 0 8px 8px;
    box-shadow: 0 -4px 8px -2px ${alpha(theme.palette.common.black, 0.1)};
    z-index: 1;

    .MuiPagination-root {
      flex-shrink: 0;
    }

    .MuiPaginationItem-root {
      min-width: 28px;
    }

    .MuiPaginationItem-ellipsis {
      user-select: none;
    }
  `,
);
