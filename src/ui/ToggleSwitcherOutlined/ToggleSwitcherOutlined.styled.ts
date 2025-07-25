import { alpha, Box, css, styled } from '@mui/material';

export const StyledToggleSwitcherOutlinedBox = styled(Box)(
  ({ theme }) => css`
    border-radius: 9px;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    padding: 7.5px 18px;
    position: relative;
    color: ${alpha(theme.palette.text.primary, 0.87)};
    color: ${theme.palette.grey['400']};
    border: 1px solid ${theme.palette.grey['400']};
    display: flex;
    gap: 6px;
    align-items: center;
    cursor: pointer;
    transition: 0.1s ease;

    &:not(.disabled, .selected, .error) {
      &:hover {
        color: ${alpha(theme.palette.text.primary, 0.87)};
        border: 1px solid ${alpha(theme.palette.text.primary, 0.87)};
      }
    }

    &.selected {
      color: ${alpha(theme.palette.primary.main, 0.87)};
      border: 1px solid ${alpha(theme.palette.primary.main, 0.87)};

      &:hover {
        color: ${alpha(theme.palette.primary.dark, 0.87)};
        border: 1px solid ${alpha(theme.palette.primary.dark, 0.87)};
      }
    }

    &.disabled {
      pointer-events: none;
      cursor: default;
    }

    &.error {
      color: ${alpha(theme.palette.error.main, 0.87)};
      border: 1px solid ${alpha(theme.palette.error.main, 0.87)};

      &:hover {
        color: ${alpha(theme.palette.error.dark, 0.87)};
        border: 1px solid ${alpha(theme.palette.error.dark, 0.87)};
      }
    }

    &.withIcons {
      padding: 7.5px 18px 7.5px 34px;
    }

    .icon {
      display: flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  `,
);
