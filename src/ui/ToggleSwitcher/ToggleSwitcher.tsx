import React, { FC, useEffect, useState } from 'react';

import { alpha, Box, useTheme } from '@mui/material';
import clsx from 'clsx';

import { StyledToggleSwitcherFab } from './ToggleSwitcher.styled';
import { OptionItemProps, OptionValue } from '../../types';

export interface ToggleSwitcherOptionProps
  extends Pick<OptionItemProps, 'key' | 'value' | 'content' | 'disabled' | 'isError'> {}

export interface ToggleSwitcherProps {
  options: ToggleSwitcherOptionProps[];
  value?: OptionValue;
  onChange?: (value: OptionValue) => void;
  disabled?: boolean;
  isError?: boolean;
}

export const ToggleSwitcher: FC<ToggleSwitcherProps> = (props) => {
  const { options, isError, disabled, value, onChange } = props;

  const theme = useTheme();

  const [valueState, setValueState] = useState<OptionValue>((options[0] as any).value);

  useEffect(() => {
    if (value !== undefined) {
      setValueState(value);
    }
  }, [value]);

  const onSelect = (value: OptionValue) => {
    setValueState(value);

    if (!onChange) {
      return;
    }

    onChange(value);
  };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      gap={'7px'}
      padding={0.5}
      borderRadius={2}
      width={1}
      bgcolor={alpha(theme.palette.action.disabled, 0.05)}
    >
      {options.map((item) => {
        const variant = valueState === item.value ? 'primary' : 'default';

        return (
          <StyledToggleSwitcherFab
            disabled={disabled || item?.disabled}
            key={item.key}
            onClick={() => {
              onSelect(item.value);
            }}
            className={clsx(variant, (isError || item?.isError) && 'error')}
            color={variant}
          >
            {item.content}
          </StyledToggleSwitcherFab>
        );
      })}
    </Box>
  );
};
