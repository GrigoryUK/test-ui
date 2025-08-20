import { css, ListItemButton, MenuItem, styled } from '@mui/material';

export const StyledTranslationSelectionListItemButton = styled(ListItemButton)(
  ({ theme }) => css`
    position: relative;
    border-top: 1px solid ${theme.palette.grey['100']};
    padding-top: 16px;
    padding-bottom: 12px;
    height: 52px;

    svg {
      width: 24px;
      height: 24px;
    }

    .arrow {
      width: 24px;
      height: 24px;
      transition: all 0.1s ease;
      transform: rotate(90deg);

      &.selected {
        color: ${theme.palette.primary.main};
      }
    }

    .divider {
      display: block;
      position: absolute;
      top: 0;
      right: -1px;
      height: 100%;
      width: 1px;
      background: ${theme.palette.primary.main};
      transition: 0.1s ease;
      opacity: 0;
      visibility: hidden;

      &.selected {
        opacity: 1;
        visibility: visible;
      }
    }
  `,
);

export const StyledTranslationSelectionMenuItem = styled(MenuItem)(
  () => css`
    svg {
      width: 24px;
      height: 24px;
    }
  `,
);
