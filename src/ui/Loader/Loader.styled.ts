import { Box, css, styled } from '@mui/material';

interface IStyledLoader {
  size: number;
}

export const StyledLoader = styled(Box)<IStyledLoader>(
  ({ theme, size }) => css`
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    position: relative;

    ::after,
    ::before {
      content: '';
      box-sizing: border-box;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 8px solid ${theme.palette.primary.main};
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      animation: animloader 1s linear infinite;
    }

    ::after {
      animation-delay: 0.5s;
    }
  `,
);
