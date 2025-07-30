import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { VerificationCode, VerificationCodeProps } from './VerificationCode';
import { VerificationCodeSize } from './VerificationCode.types';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof VerificationCode> = {
  title: 'UI/VerificationCode',
  component: VerificationCode,
  tags: ['autodocs'],
  args: {
    value: String(LibraryUtils.getRandomNumber()),
    isError: false,
    size: 'medium',
    autoFocus: true,
    length: 5,
    passwordMode: false,
  },
  argTypes: {
    size: { control: 'select', options: Object.values(VerificationCodeSize) },
  },
};

export default meta;

type Story = StoryObj<typeof VerificationCode>;

const Template = (args: VerificationCodeProps) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value as string);
  }, [args.value]);

  const onChange = (value: string) => {
    setValue(value);
  };

  return <VerificationCode {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
