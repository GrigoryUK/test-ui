import React, { useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { CheckboxUiType } from './Checkbox.types';
import { AllVariants } from '../../library-helpers';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    uiType: CheckboxUiType.default,
    label: 'Checkbox',
    checked: false,
    height: 3,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(CheckboxUiType),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template = (args: CheckboxProps) => {
  const [value, setValue] = React.useState<boolean>(false);

  useEffect(() => {
    if (args.checked === undefined) {
      return;
    }

    setValue(args.checked as any);
  }, [args.checked]);

  const onChange = (e: any) => {
    const value = e.target.checked;

    setValue(value);
  };

  return <Checkbox {...args} checked={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const All = () => {
  return (
    <AllVariants<typeof CheckboxUiType> uiTypes={CheckboxUiType} Component={(uiType) => <Template uiType={uiType} />} />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
