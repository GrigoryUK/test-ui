import { Box, css, styled } from '@mui/material';
import { orange } from '@mui/material/colors';

export const StyledLabelInfoBox = styled(Box)(
  ({ theme }) => css`
    padding: 2px 4px;
    border-radius: 3px;
    width: fit-content;

    svg {
      width: 16px;
      height: 16px;
      color: inherit;
    }

    &.default {
      font-size: 13px;
      line-height: 1.3;
      letter-spacing: 0.01em;
      color: ${theme.palette.common.white};
      background: ${orange['700']};
    }
  `,
);
