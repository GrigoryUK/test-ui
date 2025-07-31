import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker, DatePickerProps } from './DatePicker';
import { LibraryUtils } from '../../library-helpers';
import { DateUtils } from '../../utils';

const meta: Meta<typeof DatePicker> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    value: LibraryUtils.getToday(),
    dateFormat: DateUtils.getStringDdMmYyyy(),
    minDate: LibraryUtils.getToday(),
    maxDate: (function () {
      const date = LibraryUtils.getToday();

      return DateUtils.addDays(date, 7);
    })(),
    disabled: false,
    disableFuture: false,
    allowInput: false,
    label: LibraryUtils.getLoremRu(10),
  },
  argTypes: {
    value: { control: 'date' },
    dateFormat: { control: 'select', options: [DateUtils.getStringDdMmYyyy()] },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const Template = (args: DatePickerProps) => {
  const [value, setValue] = useState<Date | null>(null);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value);
  }, [args.value]);

  const onChange = (val: Date | null) => {
    setValue(val);
  };

  return <DatePicker {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
