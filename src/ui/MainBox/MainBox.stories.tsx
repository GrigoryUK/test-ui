import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { MainBox, MainBoxProps } from './MainBox';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof MainBox> = {
  title: 'UI/MainBox',
  component: MainBox,
  tags: ['autodocs'],
  args: {
    children: LibraryUtils.getLoremRu(),
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<MainBoxProps> = (args: MainBoxProps) => <MainBox {...args} />;

export const Default = Template.bind({});

Default.args = {};
