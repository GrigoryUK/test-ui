import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Highlighter, HighlighterProps } from './Highlighter';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof Highlighter> = {
  title: 'UI/Highlighter',
  component: Highlighter,
  tags: ['autodocs'],
  args: {
    text: LibraryUtils.getLoremEn(50),
    query: LibraryUtils.getLoremEn(10),
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<HighlighterProps> = (args: HighlighterProps) => <Highlighter {...args} />;

export const Default = Template.bind({});

Default.args = {};
