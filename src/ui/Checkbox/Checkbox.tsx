import React, { FC, ReactNode } from 'react';

import { Box, Checkbox as CheckboxMui, CheckboxProps as CheckboxPropsMui, FormControlLabel } from '@mui/material';

import { CheckboxUiType } from './Checkbox.types';
import { UiTypeProps } from '../../types';

export interface CheckboxProps extends UiTypeProps<typeof CheckboxUiType>, CheckboxPropsMui {
  height?: number;
  label?: ReactNode;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { uiType = CheckboxUiType.default, height, label, ...otherProps } = props;

  const checkbox = <CheckboxMui className={'checkbox'} {...otherProps} />;

  return (
    <Box className={uiType} height={height} display={'flex'} alignItems={'center'}>
      {label ? (
        <FormControlLabel className={'formControlLabel'} control={checkbox} label={label} sx={{ m: 0 }} />
      ) : (
        checkbox
      )}
    </Box>
  );
};
