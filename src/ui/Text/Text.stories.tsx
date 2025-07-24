import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Text, TextProps } from './Text';
import { TextUiType } from './Text.types';

const LOREM_RU =
  'В частности, начало повседневной работы по формированию позиции является качественно новой ступенью системы массового участия.';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: LOREM_RU,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(TextUiType),
    },
    children: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: TextUiType.subtitle_16_500_primary_087,
};
