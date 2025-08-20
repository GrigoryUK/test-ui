import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { FilterItem, FilterItemProps } from './FilterItem';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof FilterItem> = {
  title: 'UI/FilterItem',
  component: FilterItem,
  tags: ['autodocs'],
  args: {
    subtitle: LibraryUtils.getLoremRu(5),
    children: <Box>{LibraryUtils.getLoremRu(1)}</Box>,
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<FilterItemProps> = (args: FilterItemProps) => <FilterItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
