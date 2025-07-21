import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './Button';
import { ButtonUiType } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    uiType: ButtonUiType.default,
    variant: 'contained',
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(ButtonUiType),
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  uiType: ButtonUiType.default,
  variant: 'contained',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  uiType: ButtonUiType.primary,
  variant: 'contained',
};

export const Shadow = Template.bind({});
Shadow.args = {
  children: 'Button',
  uiType: ButtonUiType.shadow,
  variant: 'contained',
};

export const ViewAll = Template.bind({});
ViewAll.args = {
  children: 'Button',
  uiType: ButtonUiType.viewAll,
  variant: 'text',
};
