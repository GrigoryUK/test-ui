import { Box, css, styled } from '@mui/material';

export const StyledSearchBox = styled(Box)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    position: relative;
    max-width: 300px;

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      z-index: 1;
      transition: all 0.1s ease;
      color: ${theme.palette.grey['500']};
    }

    &:not(.disabled) {
      &:hover,
      &:focus {
        .apply {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .MuiInputBase-input {
      padding: 6.87px 44px;
    }

    .search {
      left: 12px;
    }

    .apply {
      right: 12px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;

      &:hover {
        color: ${theme.palette.primary.main};
      }
    }
  `,
);
