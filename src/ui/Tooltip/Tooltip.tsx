import React, { FC, ReactNode } from 'react';

import { Box, BoxProps } from '@mui/material';

import { ItemWithTooltip, ItemWithTooltipProps } from '../../hoc';

export interface TooltipProps extends ItemWithTooltipProps {
  boxProps?: BoxProps;
  children: ReactNode;
}

export const Tooltip: FC<TooltipProps> = (props) => {
  const { boxProps, itemWithTooltipProps, children } = props;

  const BoxWithHoc = ItemWithTooltip(Box);

  return (
    <BoxWithHoc
      display={'flex'}
      {...boxProps}
      itemWithTooltipProps={{ hoverForced: itemWithTooltipProps?.hoverForced ?? true, ...itemWithTooltipProps }}
    >
      {children}
    </BoxWithHoc>
  );
};
