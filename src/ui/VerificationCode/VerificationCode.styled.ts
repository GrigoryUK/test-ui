import { Box, css, styled } from '@mui/material';

export const StyledVerificationCodeBox = styled(Box)(
  ({ theme }) => css`
    &.error {
      .code-character {
        border: 1px solid ${theme.palette.error.main};
      }
    }

    .code-container {
      width: 302px;
      height: 54px;
    }

    .code-character {
      border: 1px solid ${theme.palette.divider};
      transition: all 0.1s ease;
      border-radius: 4px;
      font-family: ${theme.typography.fontFamily};
      font-weight: 400;
      font-style: normal;
      font-size: 32px;
      line-height: 150%;
      text-overflow: ellipsis;
      color: ${theme.palette.text.primary};
      background: transparent;
    }

    &.large {
      .code-container {
        width: 400px;
        height: 70px;
      }

      .code-character {
        font-size: 40px;
        width: 50px;
        line-height: 70px;
      }
    }

    .code-character--selected {
      outline: none;
      border: 1px solid ${theme.palette.text.primary};
    }
  `,
);
