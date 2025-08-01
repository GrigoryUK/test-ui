import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from './Input';
import { InputUiType } from './Input.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const LABEL = LibraryUtils.getLoremRu(5);

const TEXT = LibraryUtils.getLoremRu(10);

const PLACEHOLDER = LibraryUtils.getLoremRu(10);

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    uiType: InputUiType.default,
    value: TEXT,
    disabled: false,
    variant: 'outlined',
    placeholder: PLACEHOLDER,
    label: LABEL,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(InputUiType),
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'standard'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => {
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

  return <Input {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
  args: {
    value: TEXT,
  },

  render: (args) => <Template {...args} />,
};

export const All = () => {
  return (
    <AllVariants<typeof InputUiType>
      column={3}
      uiTypes={InputUiType}
      Component={(uiType) => <Template uiType={uiType} value={TEXT} label={LABEL} placeholder={PLACEHOLDER} />}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
