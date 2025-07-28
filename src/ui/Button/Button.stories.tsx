import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './Button';
import { ButtonUiType } from './Button.types';
import { Tooltip } from '../Tooltip';
import { AllVariants } from '../../library-helpers';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    uiType: ButtonUiType.default,
    variant: 'contained',
    fullWidth: false,
    disabled: false,
    children: 'Button',
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
  uiType: ButtonUiType.default,
  variant: 'contained',
};

export const All = () => {
  const options = [
    {
      type: ButtonUiType.default,
      variants: 'contained',
    },
    {
      type: ButtonUiType.primary,
      variants: 'contained',
    },
    {
      type: ButtonUiType.shadow,
      variants: 'contained',
    },
    {
      type: ButtonUiType.view_all,
      variants: 'text',
    },
  ];

  return (
    <AllVariants
      maxWidth={300}
      customContent={
        <>
          {options.map((item) => {
            return (
              <Tooltip
                key={`${item.variants}__${item.type}`}
                itemWithTooltipProps={{
                  content: `${item.type}`,
                }}
              >
                <Button uiType={item.type} variant={item.variants as any}>
                  Button
                </Button>
              </Tooltip>
            );
          })}
        </>
      }
    ></AllVariants>
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
