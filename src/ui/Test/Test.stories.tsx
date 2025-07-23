import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Test, TestProps } from './Test';
import { TestUiType } from './Test.types';

const meta: Meta<typeof Test> = {
  title: 'UI/Test',
  component: Test,
  tags: ['autodocs'],
  args: {
    uiType: TestUiType.default,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(TestUiType),
    },
  },
};

export default meta;

const Template: StoryFn<TestProps> = (args: TestProps) => <Test {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: TestUiType.default,
};
