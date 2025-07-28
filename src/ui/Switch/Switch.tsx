import React, { FC } from 'react';

import { Box, Switch as SwitchMui, SwitchProps as SwitchPropsMui } from '@mui/material';
import clsx from 'clsx';

import { SwitchUiType } from './Switch.types';
import { UiTypeProps } from '../../types';

export interface SwitchProps extends UiTypeProps<typeof SwitchUiType>, SwitchPropsMui {
  height?: number | string;
}

export const Switch: FC<SwitchProps> = (props) => {
  const { uiType = SwitchUiType.default, height = 3, ...otherProps } = props;

  return (
    <Box height={height}>
      <SwitchMui className={clsx(uiType)} {...otherProps} />
    </Box>
  );
};
