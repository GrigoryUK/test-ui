import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { FormCharacters, FormCharactersProps } from './FormCharacters';

const TEXT = 'символов';

const meta: Meta<typeof FormCharacters> = {
  title: 'UI/FormCharacters',
  component: FormCharacters,
  tags: ['autodocs'],
  args: {
    text: TEXT,
    isError: false,
    maxLength: 2000,
    currentLength: 1000,
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<FormCharactersProps> = (args: FormCharactersProps) => <FormCharacters {...args} />;

export const Default = Template.bind({});
