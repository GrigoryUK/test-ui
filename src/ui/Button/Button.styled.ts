import { Button, css, styled } from '@mui/material';

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    &.shadow {
      box-shadow: ${theme.shadows['24']};
      border-radius: 8px;
      font-size: 14px;
    }

    &.primary {
      border-radius: 8px;
      font-size: 14px;
    }

    &.view_all {
      padding: 1px 5px;
      font-size: 13px;
      line-height: 1.7;
    }
  `,
);
