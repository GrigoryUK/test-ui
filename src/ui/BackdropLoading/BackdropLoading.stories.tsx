import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { BackdropLoading } from './BackdropLoading';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof BackdropLoading> = {
  title: 'UI/BackdropLoading',
  component: BackdropLoading,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

const Template: StoryFn = () => (
  <Box height={300}>
    {LibraryUtils.getLoremRu()}
    <BackdropLoading />
  </Box>
);

export const Default = Template.bind({});

Default.args = {};
