import React, { FC, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import clsx from 'clsx';

import { StyledButtonDateBox } from './ButtonDate.styled.ts';
import { Icon } from '../../icons';

export interface ButtonDateProps {
  value?: boolean | null;
  onChange?: (value: boolean | null) => void;
  disabled?: boolean;
  text?: string;
}

export const ButtonDate: FC<ButtonDateProps> = ({ onChange, value, disabled, text }) => {
  const [ascStateUp, setAscStateUp] = useState<boolean | null>(null);

  useEffect(() => {
    if (value !== undefined) {
      setAscStateUp(value);
    }
  }, [value]);

  const onToggle = () => {
    if (disabled) return;

    let nextState: boolean | null;

    if (ascStateUp === null) {
      nextState = true;
    } else if (ascStateUp === true) {
      nextState = false;
    } else {
      nextState = null;
    }

    setAscStateUp(nextState);

    if (onChange) {
      onChange(nextState);
    }
  };

  return (
    <StyledButtonDateBox className={clsx(disabled && 'disabled', ascStateUp !== null && 'active')} onClick={onToggle}>
      <Box>{text}</Box>
      {ascStateUp === true ? <Icon uiType={'icon_arrow_asc_up'} /> : <Icon uiType={'icon_arrow_asc_down'} />}
    </StyledButtonDateBox>
  );
};
