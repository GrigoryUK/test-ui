import React, { FC } from 'react';

import { ButtonProps as  ButtonPropsMui } from '@mui/material';
import clsx from 'clsx';

import { StyledButton } from './Button.styled.ts';
import { EButtonUiType } from './Button.types.ts';
import {IUiType} from "../../types";

export interface ButtonProps extends ButtonPropsMui, IUiType<EButtonUiType> {}

export const Button: FC<ButtonProps> = (props) => {
  const { children, uiType, className, ...otherProps } = props;

  switch (uiType) {
    case EButtonUiType.viewAll:
      return (
        <StyledButton className={clsx(uiType, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
    case EButtonUiType.shadow:
      return (
        <StyledButton className={clsx(uiType, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
    case EButtonUiType.primary:
      return (
        <StyledButton className={clsx(uiType, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
    case EButtonUiType.default:
    default:
      return (
        <StyledButton className={clsx(EButtonUiType.default, className)} {...otherProps}>
          {children}
        </StyledButton>
      );
  }
};
