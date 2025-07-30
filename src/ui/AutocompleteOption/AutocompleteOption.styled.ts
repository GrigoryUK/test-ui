import { css, styled } from '@mui/material/styles';

export const StyledAutocompleteOptionLi = styled('li')(
  () => css`
    white-space: nowrap;
    display: block !important;
    text-overflow: ellipsis;
  `,
);
