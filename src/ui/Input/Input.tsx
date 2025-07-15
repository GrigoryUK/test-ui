import React, { FC } from 'react';

import { TextFieldProps } from '@mui/material';

import { StyledInput } from './Input.styled.ts';
import { InputUiType } from './Input.types.ts';
import {UiTypeProps} from "../../types";

export type InputProps = TextFieldProps & UiTypeProps<typeof InputUiType>;

export const Input: FC<InputProps> = (props) => {
  const { uiType, ...otherProps } = props;

  switch (uiType) {
    case InputUiType.third:
      return <StyledInput className={uiType} {...otherProps} />;
    case InputUiType.secondary:
      return <StyledInput className={uiType} {...otherProps} />;
    case InputUiType.default:
    default:
      return <StyledInput size={'medium'} className={uiType} {...otherProps} />;
  }
};
