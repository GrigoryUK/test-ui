import { alpha, css, styled, TextField } from '@mui/material';

export const StyledInput = styled(TextField)(
  ({ theme }) => css`
    input:-webkit-autofill {
      box-shadow: inset 0 0 0 1000px ${theme.palette.background.default};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &.third {
      .MuiInputBase-root {
        background: ${alpha(theme.palette.divider, 0.06)};
      }
      fieldset {
        display: none;
      }
    }

    &.secondary {
      .MuiInputBase-root {
        border-radius: 4px;
      }
    }

    &.default {
      .MuiInputBase-root {
        border-radius: 8px;

        &:not(.Mui-error).Mui-focused {
          fieldset {
            border-color: ${alpha(theme.palette.divider, 0.23)};
          }
        }
      }

      .MuiFormLabel-root {
        &:not(.Mui-error).Mui-focused {
          color: ${alpha(theme.palette.divider, 0.6)};
        }
      }
    }
  `,
);
