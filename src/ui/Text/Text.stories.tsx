import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Text, TextProps } from './Text';
import { TextUiType } from './Text.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: LibraryUtils.getLoremRu(),
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

export const All = () => {
  return (
    <AllVariants<typeof TextUiType>
      column={1}
      uiTypes={TextUiType}
      Component={(uiType) => <Template uiType={uiType}>{LibraryUtils.getLoremRu()}</Template>}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
