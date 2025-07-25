import React, { useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ToggleSwitcher, ToggleSwitcherOptionProps, ToggleSwitcherProps } from './ToggleSwitcher';

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
    value: { control: 'select', options: [0, 1, 2] },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitcher>;

const Template = (args: ToggleSwitcherProps) => {
  const [value, setValue] = React.useState<number>(0);

  const options: ToggleSwitcherOptionProps[] = [
    {
      value: 0,
      content: 'Tab 1',
      key: 0,
    },
    {
      value: 1,
      content: 'Tab 2',
      key: 1,
    },

    {
      value: 2,
      content: 'Tab 3',
      key: 2,
    },
  ];

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
