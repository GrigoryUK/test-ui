import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteProps } from '@mui/material';

import { AutocompleteOption } from '../AutocompleteOption';
import { Input } from '../Input';
import { DEFAULT_MAX_WIDTH_AUTOCOMPLETE } from '../../constants';
import { getOptionLabel } from '../../helpers';
import { AutoCompleteBaseProps, OptionItemProps, OptionValue } from '../../types';

export interface AutocompleteSingleProps<T extends OptionValue = OptionValue> extends AutoCompleteBaseProps {
  options?: OptionItemProps<T>[];
  onChange?: (
    event: SyntheticEvent,
    value: OptionItemProps<T>,
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<OptionItemProps<T>>,
  ) => void;
  value?: T;
  autoCompleteProps?: Omit<
    Partial<AutocompleteProps<any, false, any, false>>,
    'value' | 'options' | 'onChange' | 'disabled' | 'noOptionsText'
  >;
}

export const AutocompleteSingle = <T extends OptionValue = OptionValue>(props: AutocompleteSingleProps<T>) => {
  const {
    onChange,
    onClear,
    label,
    options = [],
    maxWidth,
    placementList,
    autoCompleteProps,
    withHighlightText,
    disableClearable,
    disabled,
    value,
    inputProps,
    noOptionsText,
  } = props;

  const [currentValue, setCurrentValue] = useState<OptionItemProps<T>>(null as any);

  useEffect(() => {
    const currentOption = options.find((option) => option.value === value) ?? (null as any);
    setCurrentValue(currentOption);
  }, [options, value]);

  const onChangeOption = (
    event: SyntheticEvent,
    newValue: any,
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<OptionItemProps<T>>,
  ) => {
    onChange?.(event, newValue, reason, details);

    if (reason === 'clear') {
      onClear?.();
    }
    setCurrentValue(newValue);
  };

  return (
    <Autocomplete
      value={currentValue}
      onChange={onChangeOption}
      options={options}
      renderOption={(props, option, { selected, inputValue }) => (
        <AutocompleteOption
          {...props}
          option={option}
          inputValue={inputValue}
          selected={selected}
          withHighlightText={withHighlightText}
          withoutCheckbox
          key={option.id ?? option.value}
        />
      )}
      disableClearable={disableClearable}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(option, val) => option.value === val?.value}
      getOptionDisabled={(option) => !!option.disabled}
      noOptionsText={noOptionsText}
      fullWidth
      sx={{
        maxWidth: maxWidth ?? DEFAULT_MAX_WIDTH_AUTOCOMPLETE,
        width: '100%',
      }}
      slotProps={{
        popper: {
          sx: { maxWidth: maxWidth ?? DEFAULT_MAX_WIDTH_AUTOCOMPLETE },
          placement: placementList ?? 'bottom-start',
        },
      }}
      renderInput={(params) => <Input label={label} {...inputProps} {...params} />}
      disabled={disabled}
      {...autoCompleteProps}
    />
  );
};
