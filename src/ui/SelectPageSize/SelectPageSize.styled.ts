import { alpha, Box, css, MenuItem, styled } from '@mui/material';

export const StyledSelectPageSizeBox = styled(Box)(
  ({ theme }) => css`
    display: flex;

    .button {
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 7px 12px;
      cursor: pointer;
      transition: all 0.1s ease;
      gap: 7px;
      border: 1px solid ${alpha(theme.palette.divider, 0.23)};
      color: ${alpha(theme.palette.divider, 1)};
      user-select: none;

      svg {
        transition: all 0.1s ease;
        color: ${alpha(theme.palette.grey['500'], 1)};
        width: 24px;
        height: 24px;
      }

      .number {
        min-width: 26px;
      }

      &.disabled {
        cursor: default;

        color: ${alpha(theme.palette.divider, 0.37)};
        border: 1px solid ${alpha(theme.palette.divider, 0.1)};

        svg {
          color: ${alpha(theme.palette.grey['500'], 0.37)};
        }
      }

      &.open {
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

      &:not(.disabled, .open) {
        &:hover {
          border: 1px solid ${alpha(theme.palette.divider, 1)};

          svg {
            color: ${alpha(theme.palette.divider, 1)};
          }
        }
      }
    }
  `,
);

export const StyledSelectPageSizeMenuItem = styled(MenuItem)(
  () => css`
    padding-left: 26px;
    padding-right: 26px;
  `,
);
