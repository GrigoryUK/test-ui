import React, { ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import clsx from 'clsx';

import { StyledToggleSwitcherOutlinedBox } from './ToggleSwitcherOutlined.styled.ts';

export interface ToggleSwitcherOutlinedOptionProps<T> {
  key: string | number;
  content: ReactNode;
  value: T;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface ToggleSwitcherOutlinedProps<T> {
  options: ToggleSwitcherOutlinedOptionProps<T>[];
  value?: T;
  onChange?: (value: T) => void;
  withIcons?: boolean;
  disabled?: boolean;
  isError?: boolean;
}

export const ToggleSwitcherOutlined = <T,>(props: ToggleSwitcherOutlinedProps<T>) => {
  const { options, withIcons, disabled, isError, value, onChange } = props;

  const [valueState, setValueState] = useState<T>(null as T);

  useEffect(() => {
    if (value === undefined) {
      return;
    }

    setValueState(value);
  }, [value]);

  const onSelect = (value: T) => {
    setValueState(value);

    if (!onChange) {
      return;
    }

    onChange(value);
  };

  return (
    <Box display={'flex'} alignItems={'center'} gap={1}>
      {options.map((item) => {
        return (
          <StyledToggleSwitcherOutlinedBox
            key={item.key}
            onClick={() => {
              if (item.value === undefined) {
                return;
              }

              onSelect(item.value);
            }}
            className={clsx({
              withIcons: withIcons,
              selected: item.value === valueState,
              disabled: item?.disabled || disabled,
              error: isError,
            })}
          >
            {withIcons && <Box className={'icon'}>{item?.icon}</Box>}
            <Box display={'flex'}>{item.content}</Box>
          </StyledToggleSwitcherOutlinedBox>
        );
      })}
    </Box>
  );
};
