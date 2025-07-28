import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Switch, SwitchProps } from './Switch';
import { SwitchUiType } from './Switch.types';
import { AllVariants } from '../../template-stories';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    uiType: SwitchUiType.default,
    checked: false,
    height: 3,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(SwitchUiType),
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;

const Template: StoryFn<SwitchProps> = (args: SwitchProps) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: SwitchUiType.default,
};

export const All = () => {
  return (
    <AllVariants<typeof SwitchUiType> uiTypes={SwitchUiType} Component={(uiType) => <Template uiType={uiType} />} />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
