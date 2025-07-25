import { alpha, css, Fab, styled } from '@mui/material';

export const StyledToggleSwitcherFab = styled(Fab)(
  ({ theme }) => css`
    white-space: nowrap;

    &:not(.error) {
      &.default {
        background: ${alpha(theme.palette.action.disabled, 0.01)};
        box-shadow: none;
        color: ${alpha(theme.palette.text.primary, 0.38)};

        &:hover {
          background: ${alpha(theme.palette.action.disabled, 0.05)};
          color: ${alpha(theme.palette.text.primary, 0.5)};
        }
      }
    }

    &.error {
      background: ${alpha(theme.palette.error.main, 0.5)};
      box-shadow: none;
      color: ${alpha(theme.palette.common.white, 1)};
    }
  `,
);
