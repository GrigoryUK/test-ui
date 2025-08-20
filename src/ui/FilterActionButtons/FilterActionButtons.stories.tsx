import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { FilterActionButtons, FilterActionButtonsProps } from './FilterActionButtons';
import { t } from '../../library-helpers';

const meta: Meta<typeof FilterActionButtons> = {
  title: 'UI/FilterActionButtons',
  component: FilterActionButtons,
  tags: ['autodocs'],
  args: {
    closeText: t['Close'],
    clearText: t['Clear'],
    applyText: t['Apply'],
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<FilterActionButtonsProps> = (args: FilterActionButtonsProps) => (
  <FilterActionButtons {...args} />
);

export const Default = Template.bind({});

Default.args = {};
