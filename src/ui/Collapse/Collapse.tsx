import React, { FC } from 'react';

import { CollapseProps as CollapsePropsMui } from '@mui/material';
import clsx from 'clsx';

import { StyledCollapse, StyledCollapseBox } from './Collapse.styled.ts';
import { CollapseUiType } from './Collapse.types';
import { UiTypeProps } from '../../types';

export interface CollapseProps extends UiTypeProps<typeof CollapseUiType>, CollapsePropsMui {}

export const Collapse: FC<CollapseProps> = (props) => {
  const { uiType, className, children, ...otherProps } = props;

  switch (uiType) {
    case CollapseUiType.unmount:
      if (otherProps?.in) {
        return <StyledCollapseBox className={clsx(className, uiType)}>{children}</StyledCollapseBox>;
      }

      return null;
    case CollapseUiType.mount:
      return (
        <StyledCollapseBox className={clsx(className, uiType, otherProps?.in && 'in')}>{children}</StyledCollapseBox>
      );
    case CollapseUiType.default:
    default:
      return (
        <StyledCollapse className={clsx(className, uiType)} {...otherProps}>
          {children}
        </StyledCollapse>
      );
  }
};
