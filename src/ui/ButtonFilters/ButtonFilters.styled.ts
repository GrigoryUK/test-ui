import { alpha, Box, css, styled } from '@mui/material';

export const StyledButtonFiltersBox = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 7px 12px;
    cursor: pointer;
    transition: all 0.1s ease;
    gap: 8px;
    border: 1px solid ${alpha(theme.palette.divider, 0.23)};
    color: ${alpha(theme.palette.divider, 1)};
    user-select: none;
    width: fit-content;

    svg {
      transition: all 0.1s ease;
      color: ${alpha(theme.palette.grey['500'], 1)};
      width: 20px;
      height: 20px;
    }

    &.disabled {
      cursor: default;
      color: ${alpha(theme.palette.divider, 0.5)};
    }

    &.active {
      border: 1px solid ${alpha(theme.palette.primary.main, 0.87)};
      color: ${alpha(theme.palette.primary.main, 0.87)};

      svg {
        color: ${alpha(theme.palette.primary.main, 0.87)};
      }

      &:hover {
        border: 1px solid ${alpha(theme.palette.primary.main, 1)};
        color: ${alpha(theme.palette.primary.main, 1)};

        svg {
          color: ${alpha(theme.palette.primary.main, 1)};
        }
      }
    }

    &:not(.disabled, .active) {
      &:hover {
        border: 1px solid ${alpha(theme.palette.divider, 1)};

        svg {
          color: ${alpha(theme.palette.divider, 1)};
        }
      }
    }
  `,
);
