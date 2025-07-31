import { css, styled } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';

export const StyledDatePickerDesktopDatePicker = styled(DesktopDatePicker)(
  ({ theme }) => css`
    & .MuiPickersInputBase-root {
      border-radius: 8px;
      height: 60px;
      padding-left: 12px;
      padding-right: 12px;
      user-select: none;
      &.Mui-error {
        svg {
          color: ${theme.palette.error.main};
        }
        color: ${theme.palette.error.main};
      }
    }

    & .MuiInputBase-input {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;
    }

    & .MuiInputAdornment-root {
      margin-right: 8px;
    }

    & .MuiInputLabel-root {
      top: 50%;
      transform: translateY(-60%);
      padding-left: 14px;
      transition: all 0.2s ease;
      font-size: 14px;
    }

    & .MuiInputLabel-shrink {
      top: -10px;
      transform: none;
    }
  `,
);
