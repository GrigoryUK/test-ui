import React, { ChangeEvent, FC, KeyboardEvent, useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import { StyledSearchBox } from './Search.styled.ts';
import { Input } from '../Input';
import { Icon } from '../../icons';
import { ToolboxUtils } from '../../utils';

export interface SearchProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const TIMEOUT = 1000;

export const Search: FC<SearchProps> = (props) => {
  const { onChange, value, disabled, placeholder } = props;

  const [valueState, setValueState] = useState<string>('');

  useEffect(() => {
    if (!value) {
      return;
    }

    setValueState(value);
  }, [value]);

  const onChangeDebounce = useCallback(
    ToolboxUtils.debounce((value: string) => {
      if (onChange && !disabled) {
        onChange(value);
      }
    }, TIMEOUT),
    [onChange, disabled],
  );

  const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = event.currentTarget.value;
    setValueState(currentValue);
    onChangeDebounce(currentValue);
  };

  const onApplyFilter = () => {
    if (!onChange || disabled) {
      return;
    }

    onChangeDebounce.cancel();
    onChange(valueState);
  };

  const onKeyPress = (e: KeyboardEvent) => {
    if (disabled) {
      return;
    }

    if (e.key === 'Enter') {
      onApplyFilter();
    }
  };

  return (
    <StyledSearchBox className={clsx(disabled && 'disabled')}>
      <Icon uiType={'icon_template_search'} className={'search'} />
      <Input
        placeholder={placeholder}
        disabled={disabled}
        onKeyPress={onKeyPress}
        value={valueState}
        onChange={onInputChange}
        size={'small'}
      />
      <Icon uiType={'icon_template_arrow_search'} onClick={onApplyFilter} className={'apply'} />
    </StyledSearchBox>
  );
};
