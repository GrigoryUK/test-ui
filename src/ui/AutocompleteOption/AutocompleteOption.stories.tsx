import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { AutocompleteOption, AutocompleteOptionProps } from './AutocompleteOption';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof AutocompleteOption> = {
  title: 'UI/AutocompleteOption',
  component: AutocompleteOption,
  tags: ['autodocs'],
  args: {
    inputValue: LibraryUtils.getLoremRu(10),
    selected: false,
    withoutCheckbox: true,
    withHighlightText: false,
    option: {
      id: 1,
      value: LibraryUtils.getRandomNumber(),
      text: LibraryUtils.getLoremRu(20),
    },
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<AutocompleteOptionProps> = (args: AutocompleteOptionProps) => <AutocompleteOption {...args} />;

export const Default = Template.bind({});

Default.args = {};
