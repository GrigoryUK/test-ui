import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { ColumnBox, ColumnBoxProps } from './ColumnBox';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof ColumnBox> = {
  title: 'UI/ColumnBox',
  component: ColumnBox,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

const Template: StoryFn<ColumnBoxProps> = (args: ColumnBoxProps) => <ColumnBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Box>{LibraryUtils.getLoremRu()}</Box>
      <Box>{LibraryUtils.getLoremRu()}</Box>
    </>
  ),
};
