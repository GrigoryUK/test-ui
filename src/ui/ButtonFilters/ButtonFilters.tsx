import React, { FC, ReactNode } from 'react';

import { Box } from '@mui/material';
import clsx from 'clsx';

import { StyledButtonFiltersBox } from './ButtonFilters.styled';
import { Icon } from '../../icons';

export interface ButtonFiltersProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonFilters: FC<ButtonFiltersProps> = (props) => {
  const { onClick, disabled, children } = props;

  return (
    <StyledButtonFiltersBox className={clsx(disabled && 'disabled')} onClick={onClick}>
      <Icon uiType={'icon_filters'} width={20} />
      <Box>{children}</Box>
    </StyledButtonFiltersBox>
  );
};
