import { css, FormHelperText, styled } from '@mui/material';

export const StyledFormHelperText = styled(FormHelperText)(
  () => css`
    width: 100%;
    padding-right: 14px;
    padding-left: 14px;

    &.withoutPadding {
      padding-right: 0;
      padding-left: 0;
    }

    &.default {
      line-height: 1.3;
    }

    &.ellipsis {
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `,
);
