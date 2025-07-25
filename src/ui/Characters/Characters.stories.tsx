import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Characters, CharactersProps } from './Characters';

const meta: Meta<typeof Characters> = {
  title: 'UI/Characters',
  component: Characters,
  tags: ['autodocs'],
  args: {
    text: 'characters',
    isError: false,
    maxLength: 2000,
    currentLength: 1000,
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<CharactersProps> = (args: CharactersProps) => <Characters {...args} />;

export const Default = Template.bind({});
