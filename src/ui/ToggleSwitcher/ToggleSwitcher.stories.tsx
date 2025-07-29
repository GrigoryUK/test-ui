import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ToggleSwitcher, ToggleSwitcherOptionProps, ToggleSwitcherProps } from './ToggleSwitcher';
import { LibraryUtils } from '../../library-helpers';

const arr = LibraryUtils.createArray();

const meta: Meta<typeof ToggleSwitcher> = {
  title: 'UI/ToggleSwitcher',
  component: ToggleSwitcher,
  tags: ['autodocs'],
  args: {
    value: 0,
    disabled: false,
    isError: false,
  },
  argTypes: {
    value: { control: 'select', options: arr },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitcher>;

const Template = (args: ToggleSwitcherProps) => {
  const [value, setValue] = useState<number>(arr[0] as any);

  const options: ToggleSwitcherOptionProps[] = arr.map((item) => {
    return {
      value: item,
      content: `Панель ${item}`,
      key: item,
    };
  });

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value as any);
  }, [args.value]);

  const onChange = (value: any) => {
    setValue(value);
  };

  return <ToggleSwitcher {...args} options={options} value={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
