import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { TitleAndDescription, TitleAndDescriptionProps } from './TitleAndDescription';
import { Switch } from '../Switch';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof TitleAndDescription> = {
  title: 'UI/TitleAndDescription',
  component: TitleAndDescription,
  tags: ['autodocs'],
  args: {
    title: LibraryUtils.getLoremRu(10),
    description: LibraryUtils.getLoremRu(20),
    rightBlock: <Switch />,
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<TitleAndDescriptionProps> = (args: TitleAndDescriptionProps) => (
  <TitleAndDescription {...args} />
);

export const Default = Template.bind({});

Default.args = {};
