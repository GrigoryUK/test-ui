import React, { FC } from 'react';

import { DatePickerProps as DatePickerPropsMui } from '@mui/x-date-pickers';
import { PickerValue } from '@mui/x-date-pickers/internals';
import clsx from 'clsx';

import { StyledDatePickerDesktopDatePicker } from './DatePicker.styled.ts';
import { Icon } from '../../icons';
import { DateUtils } from '../../utils';

export interface DatePickerProps extends DatePickerPropsMui {
  label: string;
  value?: PickerValue;
  onChange?: (value: Date | null) => void;
  className?: string;
  name?: string;
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: string;
  allowInput?: boolean;
}

const icon = () => <Icon uiType={'icon_calendar'} width={32} height={32} />;

export const DatePicker: FC<DatePickerProps> = (props) => {
  const { name, label, className, value, onChange, minDate, maxDate, dateFormat, allowInput, ...otherProps } = props;

  return (
    <StyledDatePickerDesktopDatePicker
      label={label}
      value={value ?? null}
      onChange={(date: Date | null) => {
        onChange?.(date ?? null);
      }}
      name={name}
      slots={{ openPickerIcon: icon }}
      className={clsx(className)}
      minDate={minDate}
      maxDate={maxDate}
      format={dateFormat ?? DateUtils.getStringDdMmYyyy()}
      {...otherProps}
      slotProps={{
        textField: {
          fullWidth: true,
          readOnly: !allowInput,
        },
        ...otherProps?.slotProps,
      }}
    />
  );
};
