import { Box, css, styled } from '@mui/material';

export const StyledCostInfoBox = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.grey['500']};
    width: fit-content;

    &:not(.disabled) {
      &:hover {
        color: ${theme.palette.grey['700']};
      }
    }

    svg {
      transition: all 0.1s ease;
      width: 18px;
      height: 18px;
    }
  `,
);
