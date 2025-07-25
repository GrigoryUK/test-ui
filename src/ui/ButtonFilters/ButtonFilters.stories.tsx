import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { ButtonFilters, ButtonFiltersProps } from './ButtonFilters';

const meta: Meta<typeof ButtonFilters> = {
  title: 'UI/ButtonFilters',
  component: ButtonFilters,
  tags: ['autodocs'],
  args: {
    text: 'Filters',
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<ButtonFiltersProps> = (args: ButtonFiltersProps) => <ButtonFilters {...args} />;

export const Default = Template.bind({});
