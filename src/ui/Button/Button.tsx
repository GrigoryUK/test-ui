import React, { FC } from 'react';

import { ButtonProps as ButtonPropsMui } from '@mui/material';
import clsx from 'clsx';

import { StyledButton } from './Button.styled.ts';
import { ButtonUiType } from './Button.types.ts';
import { UiTypeProps } from '../../types';

export interface ButtonProps extends ButtonPropsMui, UiTypeProps<typeof ButtonUiType> {}

const config: Record<keyof typeof ButtonUiType, ButtonProps> = {
  [ButtonUiType.default]: {},
  [ButtonUiType.primary]: {},
  [ButtonUiType.shadow]: {},
  [ButtonUiType.view_all]: {},
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, uiType = ButtonUiType.default, className, ...otherProps } = props;

  return (
    <StyledButton className={clsx(uiType, className)} {...config[uiType]} {...otherProps}>
      {children}
    </StyledButton>
  );
};
