import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Search, SearchProps } from './Search';
import { t } from '../../library-helpers';

const meta: Meta<typeof Search> = {
  title: 'UI/Search',
  component: Search,
  tags: ['autodocs'],
  args: {
    value: '',
    disabled: false,
    placeholder: `${t['Search']}...`,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Search>;

const Template = (args: SearchProps) => {
  const [value, setValue] = useState<''>('');

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value as any);
  }, [args.value]);

  const onChange = (e: any) => {
    const value = e.target.value;

    setValue(value);
  };

  return <Search {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
