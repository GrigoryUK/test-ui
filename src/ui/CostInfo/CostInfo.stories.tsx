import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { CostInfo, CostInfoProps } from './CostInfo';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof CostInfo> = {
  title: 'UI/CostInfo',
  component: CostInfo,
  tags: ['autodocs'],
  args: {
    disabled: false,
    tooltipContent: LibraryUtils.getLoremRu(10),
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<CostInfoProps> = (args: CostInfoProps) => <CostInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};
