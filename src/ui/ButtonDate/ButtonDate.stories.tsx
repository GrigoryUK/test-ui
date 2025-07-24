import React, { useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ButtonDate, ButtonDateProps } from './ButtonDate';

const meta: Meta<typeof ButtonDate> = {
  title: 'UI/ButtonDate',
  component: ButtonDate,
  tags: ['autodocs'],
  args: {
    text: 'Sort by date',
    disabled: false,
    value: false,
  },
  argTypes: {
    value: {
      control: { type: 'radio' },
      options: [null, true, false],
      mapping: {
        true: true,
        false: false,
        null: null,
      },
    },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonDate>;

const Template = (args: ButtonDateProps) => {
  const [value, setValue] = React.useState<boolean | null>(null);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value);
  }, [args.value]);

  return <ButtonDate {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  args: {
    value: null,
  },

  render: (args) => <Template {...args} />,
};
