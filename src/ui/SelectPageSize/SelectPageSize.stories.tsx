import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SelectPageSize, SelectPageSizeProps } from './SelectPageSize';
import { PAGE_SIZE } from '../../constants';

const meta: Meta<typeof SelectPageSize> = {
  title: 'UI/SelectPageSize',
  component: SelectPageSize,
  tags: ['autodocs'],
  args: {
    value: PAGE_SIZE[0],
    disabled: false,
  },
  argTypes: {
    value: {
      control: 'select',
      options: PAGE_SIZE,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelectPageSize>;

const Template = (args: SelectPageSizeProps) => {
  const [value, setValue] = useState<number>(PAGE_SIZE[0] as any);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value as any);
  }, [args.value]);

  const onChange = (num: number) => {
    setValue(num);
  };

  return <SelectPageSize {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
  args: {
    value: null,
  },

  render: (args) => <Template {...args} />,
};
