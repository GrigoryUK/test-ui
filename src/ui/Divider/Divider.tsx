import React, { FC } from 'react';

import { DividerProps as DividerPropsMui } from '@mui/material';
import clsx from 'clsx';

import { StyledDivider } from './Divider.styled';
import { DividerUiType } from './Divider.types';
import { UiTypeProps } from '../../types';

export interface DividerProps extends UiTypeProps<typeof DividerUiType>, DividerPropsMui {}

export const Divider: FC<DividerProps> = (props) => {
  const { uiType = DividerUiType.default, className, ...otherProps } = props;

  return <StyledDivider className={clsx(className, uiType)} {...otherProps} />;
};
