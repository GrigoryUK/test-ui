import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { PaperBox, PaperBoxProps } from './PaperBox';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof PaperBox> = {
  title: 'UI/PaperBox',
  component: PaperBox,
  tags: ['autodocs'],
  args: {
    maxWidth: 300,
    children: <Box>{LibraryUtils.getLoremEn()}</Box>,
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<PaperBoxProps> = (args: PaperBoxProps) => <PaperBox {...args} />;

export const Default = Template.bind({});

Default.args = {};
