import { Box, css, styled } from '@mui/material';

export const ProgressStepsWrapper = styled(Box)(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    margin-bottom: 32px;

    .step-label-container {
      position: absolute;
      top: 10px;
      left: 0;
      right: 0;
      text-align: start;

      &.clickable {
        cursor: pointer;
      }

      .step-label {
        transition: opacity 0.2s ease-in-out;
        pointer-events: none;
        opacity: 0.5;
        color: ${theme.palette.grey[400]};
      }

      .step-label.active {
        opacity: 1;
        color: ${theme.palette.primary.dark};
        pointer-events: auto;
      }

      .step-label.passed {
        opacity: 1;
      }
    }
  `,
);

export const ProgressStepsItem = styled(Box)(
  ({ theme }) => css`
    flex: 1;
    height: 12px;
    border-radius: 0;
    background-color: ${theme.palette.grey[300]};
    cursor: default;
    transition: background-color 0.2s ease;

    &.passed {
      background-color: ${theme.palette.primary.main};
    }

    &.active {
      background-color: ${theme.palette.primary.dark};
    }

    &.clickable {
      cursor: pointer;
    }

    &.radius-left {
      border-radius: 8px 0 0 8px;
    }

    &.radius-right {
      border-radius: 0 8px 8px 0;
    }
  `,
);
