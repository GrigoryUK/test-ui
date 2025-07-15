import React, { FC } from 'react';

import { TextFieldProps } from '@mui/material';

import { StyledInput } from './Input.styled.ts';
import { EInputUiType } from './Input.types.ts';
import {IUiType} from "../../types";

export type InputProps = TextFieldProps & IUiType<EInputUiType>;

export const Input: FC<InputProps> = (props) => {
  const { uiType = EInputUiType.default, ...otherProps } = props;
  switch (uiType) {
    case EInputUiType.third:
      return <StyledInput className={uiType} {...otherProps} />;
    case EInputUiType.secondary:
      return <StyledInput className={uiType} {...otherProps} />;
    case EInputUiType.default:
    default:
      return <StyledInput size={'medium'} className={uiType} {...otherProps} />;
  } 
};
