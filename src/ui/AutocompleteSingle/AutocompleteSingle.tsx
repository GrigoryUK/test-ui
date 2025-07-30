import React, { useEffect, useState } from 'react';

import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteProps } from '@mui/material';

import { AutocompleteOption } from '../AutocompleteOption';
import { Input } from '../Input';
import { DEFAULT_MAX_WIDTH_AUTOCOMPLETE } from '../../constants';
import { onGetOptionLabel } from '../../helpers';
import { AutoCompleteBaseProps, OptionItemProps, OptionValue } from '../../types';

export interface AutocompleteSingleProps<
  Value extends OptionValue = OptionValue,
  Option extends OptionItemProps<Value> = OptionItemProps<Value>,
> extends AutoCompleteBaseProps {
  options?: Option[];
  onChange?: (
    event: React.SyntheticEvent,
    value: Option,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<Option>,
  ) => void;
  value?: Value | null;
  autoCompleteProps?: Omit<
    Partial<AutocompleteProps<any, false, any, false>>,
    'value' | 'options' | 'onChange' | 'disabled'
  >;
}

export const AutocompleteSingle = <
  Value extends OptionValue,
  Option extends OptionItemProps<Value> = OptionItemProps<Value>,
>({
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
}: AutocompleteSingleProps<Value, Option>) => {
  const [currentValue, setCurrentValue] = useState<Option>(null as any);

  useEffect(() => {
    const currentOption = options.find((option) => option.value === value) ?? (null as any);
    setCurrentValue(currentOption);
  }, [options, value]);

  const onChangeOption = (
    event: React.SyntheticEvent,
    newValue: any,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<Option>,
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
      getOptionLabel={onGetOptionLabel}
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
