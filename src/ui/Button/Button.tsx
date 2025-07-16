import React, { FC } from 'react';

import { ButtonProps as ButtonPropsMui } from '@mui/material';
import clsx from 'clsx';

import { StyledButton } from './Button.styled.ts';
import { ButtonUiType } from './Button.types.ts';
import { UiTypeProps } from '../../types';

export interface ButtonProps extends ButtonPropsMui, UiTypeProps<typeof ButtonUiType> {}

export const Button: FC<ButtonProps> = (props) => {
  const { children, uiType, className, ...otherProps } = props;

  switch (uiType) {
    case ButtonUiType.viewAll:
      return (
        <StyledButton className={clsx(uiType, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
    case ButtonUiType.shadow:
      return (
        <StyledButton className={clsx(uiType, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
    case ButtonUiType.primary:
      return (
        <StyledButton className={clsx(uiType, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
    case ButtonUiType.default:
    default:
      return (
        <StyledButton className={clsx(ButtonUiType.default, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
  }
};
