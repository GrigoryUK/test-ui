import React, { SyntheticEvent, useEffect, useState } from 'react';

import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteProps,
  Chip,
} from '@mui/material';

import { AutocompleteOption } from '../AutocompleteOption';
import { Input } from '../Input';
import { DEFAULT_MAX_WIDTH_AUTOCOMPLETE } from '../../constants';
import { getOptionLabel } from '../../helpers';
import { ItemWithTooltip } from '../../hoc';
import { AutoCompleteBaseProps, OptionItemProps, OptionValue } from '../../types';

export interface AutocompleteMultiProps<T extends OptionValue = OptionValue> extends AutoCompleteBaseProps {
  options?: OptionItemProps<T>[];
  onChange?: (
    event: SyntheticEvent,
    value: T[],
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<OptionItemProps<T>>,
  ) => void;
  value?: T[];
  autoCompleteProps?: Omit<
    Partial<AutocompleteProps<any, true, any, false>>,
    'value' | 'options' | 'disabled' | 'onChange' | 'noOptionsText'
  >;
  withoutCheckboxes?: boolean;
}

export const AutocompleteMulti = <T extends OptionValue = OptionValue>(props: AutocompleteMultiProps<T>) => {
  const {
    onChange,
    onClear,
    label,
    options,
    maxWidth,
    placementList,
    autoCompleteProps,
    withHighlightText,
    disableClearable,
    withoutCheckboxes,
    value,
    inputProps,
    disabled,
    noOptionsText,
  } = props;

  const ChipWithHoc = ItemWithTooltip(Chip);

  const [multiValues, setMultiValues] = useState<OptionItemProps<T>[]>([]);

  const [currentOptions, setCurrentOptions] = useState<OptionItemProps<T>[]>([]);

  const [input, setInput] = useState<string>('');

  useEffect(() => {
    if (!options) return;
    setCurrentOptions(options);
  }, [options]);

  useEffect(() => {
    const selectedOptions = currentOptions.reduce((acc, curr) => {
      if (value?.includes(curr.value)) {
        acc.push(curr);
      }

      return acc;
    }, [] as OptionItemProps<T>[]);

    setMultiValues(selectedOptions);
  }, [currentOptions, value]);

  const onChangeOption = (
    event: SyntheticEvent,
    values: OptionItemProps<T>[],
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<OptionItemProps<T>>,
  ) => {
    const selectedValue = values?.map((item) => item?.value) ?? [];
    setMultiValues(values);

    if (onClear && reason === 'clear') {
      onClear();
    }

    if (onChange) {
      onChange(event, selectedValue, reason, details);
    }
  };

  return (
    <Autocomplete
      disableCloseOnSelect
      multiple
      inputValue={input}
      onInputChange={(_, val) => {
        setInput(val);
      }}
      value={multiValues}
      onChange={(event, value, reason, details) => {
        onChangeOption(event, value, reason, details as AutocompleteChangeDetails<OptionItemProps<T>>);
      }}
      options={currentOptions}
      renderTags={(value, getTagProps) => {
        return value.map((item, index) => (
          <ChipWithHoc
            itemWithTooltipProps={{
              content: item?.text,
              isClosingElement: true,
            }}
            label={item?.text}
            {...getTagProps({ index })}
            key={index}
          />
        ));
      }}
      renderOption={(props, option, { inputValue, index, selected }) => (
        <AutocompleteOption
          option={option}
          inputValue={inputValue}
          selected={selected}
          withoutCheckbox={withoutCheckboxes}
          withHighlightText={withHighlightText}
          {...props}
          key={`${option.key || option.id || option.value}_${index}`}
        />
      )}
      disableClearable={disableClearable}
      fullWidth={autoCompleteProps?.fullWidth ?? true}
      handleHomeEndKeys={autoCompleteProps?.handleHomeEndKeys ?? true}
      selectOnFocus={autoCompleteProps?.selectOnFocus ?? true}
      noOptionsText={noOptionsText}
      getOptionDisabled={(option) => option?.disabled as boolean}
      isOptionEqualToValue={(option, value) => {
        if (!option || !value) {
          return false;
        }

        return option.value === value.value;
      }}
      getOptionLabel={getOptionLabel}
      sx={{
        maxWidth: maxWidth ?? DEFAULT_MAX_WIDTH_AUTOCOMPLETE,
        width: '100%',
      }}
      slotProps={{
        popper: {
          sx: {
            maxWidth: maxWidth ?? DEFAULT_MAX_WIDTH_AUTOCOMPLETE,
          },
          placement: placementList ?? 'bottom-start',
        },
      }}
      renderInput={(params) => <Input label={label} {...inputProps} {...params} />}
      disabled={disabled}
      {...autoCompleteProps}
    />
  );
};
