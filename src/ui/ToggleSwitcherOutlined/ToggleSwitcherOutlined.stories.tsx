import React, { useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  ToggleSwitcherOutlined,
  ToggleSwitcherOutlinedOptionProps,
  ToggleSwitcherOutlinedProps,
} from './ToggleSwitcherOutlined';
import { LibraryUtils } from '../../library-helpers';

const arr = LibraryUtils.createArray();

console.log(arr);

const meta: Meta<typeof ToggleSwitcherOutlined> = {
  title: 'UI/ToggleSwitcherOutlined',
  component: ToggleSwitcherOutlined,
  tags: ['autodocs'],
  args: {
    value: 0,
    isError: false,
    disabled: false,
    withIcons: false,
  },

  argTypes: {
    value: { control: 'select', options: arr },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitcherOutlined>;

const Template = (args: ToggleSwitcherOutlinedProps<any>) => {
  const [value, setValue] = React.useState<number>(arr[0]);

  const options: ToggleSwitcherOutlinedOptionProps<any>[] = arr.map((item) => {
    return {
      value: item,
      content: `Tab ${item}`,
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

  return <ToggleSwitcherOutlined {...args} options={options} value={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
