import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination, PaginationProps } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    count: 10,
    disabled: false,
    page: 5,
  },
  argTypes: {
    count: { control: 'number' },
    page: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const Template = (args: PaginationProps) => {
  const [value, setValue] = useState<number>(5);

  useEffect(() => {
    if (args.count === undefined) {
      return;
    }

    setValue(args.count as any);
  }, [args.count]);

  const onSetPage = (page: number) => {
    setValue(page);
  };

  return <Pagination {...args} page={value} onSetPage={onSetPage} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
