import { css, Divider, styled } from '@mui/material';

export const StyledDivider = styled(Divider)(
  ({ theme }) => css`
    &.default {
      border-color: ${theme.palette.customDivider.main};
    }
    &.soft {
      border-color: ${theme.palette.grey['200']};
    }
  `,
);
