import React, { FC } from 'react';

import { LinkProps as LinkPropsMui } from '@mui/material';
import clsx from 'clsx';

import { StyledLink } from './Link.styled.ts';
import { LinkUiType } from './Link.types';
import { UiTypeProps } from '../../types';

export interface LinkProps extends UiTypeProps<typeof LinkUiType>, LinkPropsMui {}

export const Link: FC<LinkProps> = (props) => {
  const { uiType = LinkUiType.default, className, children, ...otherProps } = props;

  return (
    <StyledLink className={clsx(uiType, className)} {...otherProps}>
      {children}
    </StyledLink>
  );
};
