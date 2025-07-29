import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { ButtonFilters, ButtonFiltersProps } from './ButtonFilters';
import { t } from '../../library-helpers';

const TEXT = t['Filters'];

const meta: Meta<typeof ButtonFilters> = {
  title: 'UI/ButtonFilters',
  component: ButtonFilters,
  tags: ['autodocs'],
  args: {
    text: TEXT,
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<ButtonFiltersProps> = (args: ButtonFiltersProps) => <ButtonFilters {...args} />;

export const Default = Template.bind({});
