import React, { FC } from 'react';

import { TextFieldProps } from '@mui/material';
import clsx from 'clsx';

import { StyledInput } from './Input.styled.ts';
import { InputUiType } from './Input.types.ts';
import { UiTypeProps } from '../../types';

export type InputProps = TextFieldProps & UiTypeProps<typeof InputUiType>;

const config: Record<keyof typeof InputUiType, InputProps> = {
  [InputUiType.default]: { size: 'medium' },
  [InputUiType.secondary]: {},
  [InputUiType.third]: {},
};

export const Input: FC<InputProps> = (props) => {
  const { uiType = InputUiType.default, className, ...otherProps } = props;

  return <StyledInput className={clsx(uiType, className)} {...config[uiType]} {...otherProps} />;
};
