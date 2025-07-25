import { Box, Collapse, css, styled } from '@mui/material';

export const StyledCollapseBox = styled(Box)(
  () => css`
    width: 100%;

    &.mount {
      display: none;
    }

    &.in {
      display: block;
    }
  `,
);

export const StyledCollapse = styled(Collapse)(() => css``);
