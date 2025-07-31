import React, { ChangeEvent } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import {
  ItemWithFormCharacters,
  ItemWithFormCharactersProps,
  ItemWithFormError,
  ItemWithFormErrorProps,
  ItemWithFormHelper,
  ItemWithFormHelperProps,
  ItemWithInputMask,
  ItemWithInputMaskProps,
} from '../../hoc';
import { ControlFiledProps } from '../../types';
import { Input, InputProps } from '../../ui';

export interface ControlInputProps<T extends FieldValues>
  extends ControlFiledProps<T>,
    ItemWithInputMaskProps,
    ItemWithFormCharactersProps,
    ItemWithFormHelperProps,
    ItemWithFormErrorProps {
  inputProps?: InputProps;
}

export const ControlInput = <T extends FieldValues = FieldValues>(props: ControlInputProps<T>) => {
  const {
    inputProps,
    controlProps,
    itemWithInputMaskProps,
    itemWithFormHelperProps,
    itemWithFormErrorProps,
    itemWithFormCharactersProps,
    onError,
  } = props;

  const InputWithHoc = ItemWithFormError(ItemWithFormHelper(ItemWithFormCharacters(ItemWithInputMask(Input))));

  const { field, fieldState } = useController({
    ...controlProps,
    name: controlProps.name,
    control: controlProps?.control,
    disabled: controlProps?.disabled,
  });

  const isError = onError ? onError(fieldState) : fieldState?.error && (fieldState.isTouched || fieldState.invalid);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const targetValue = event.target.value;

    if (itemWithFormCharactersProps?.maxLength && targetValue?.length > itemWithFormCharactersProps?.maxLength) {
      return;
    }

    if (field.onChange) {
      field.onChange(event);
    }

    if (inputProps?.onChange) {
      inputProps.onChange(event);
    }
  };

  const onPaste = (event: any) => {
    if (!itemWithFormCharactersProps?.maxLength) {
      return;
    }

    const pastedText = event.clipboardData.getData('text/plain');

    const maxLength = itemWithFormCharactersProps.maxLength;

    const currentValue = field.value || '';

    if (pastedText.length + currentValue.length > maxLength) {
      event.preventDefault();

      const allowedLength = maxLength - currentValue.length;

      if (allowedLength <= 0) {
        return;
      }

      const trimmedText = pastedText.slice(0, allowedLength);

      const newValue = currentValue + trimmedText;

      const fakeEvent = {
        target: { value: newValue },
      } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

      if (field.onChange) {
        field.onChange(fakeEvent);
      }

      if (inputProps?.onChange) {
        inputProps.onChange(fakeEvent);
      }
    }
  };

  return (
    <InputWithHoc
      id={field.name}
      error={isError}
      fullWidth={inputProps?.fullWidth ?? true}
      variant={inputProps?.variant ?? 'outlined'}
      focused={inputProps?.focused ?? false}
      disabled={inputProps?.disabled ?? field?.disabled}
      value={field?.value ?? ''}
      onPaste={onPaste}
      {...controlProps}
      {...inputProps}
      itemWithFormErrorProps={{
        show: isError,
        message: fieldState?.error?.message,
        ...itemWithFormErrorProps,
      }}
      itemWithInputMaskProps={{
        ...itemWithInputMaskProps,
      }}
      itemWithFormHelperProps={{
        show: !isError && !!itemWithFormHelperProps?.message?.length,
        ...itemWithFormHelperProps,
      }}
      itemWithFormCharactersProps={{
        isError: isError,
        currentLength: field?.value?.length,
        ...itemWithFormCharactersProps,
      }}
      onChange={onChange}
    />
  );
};
