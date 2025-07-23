import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Icon, IconProps } from './Icon';
import { IconUiType } from './Icon.types';

const meta: Meta<typeof Icon> = {
  title: 'ICONS/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    uiType: IconUiType.icon_wifi,
    width: 24,
    height: 24,
    color: 'inherit',
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(IconUiType),
    },
  },
};

export default meta;

const Template: StoryFn<IconProps> = (args: IconProps) => <Icon {...args} />;

export const Icon_wifi = Template.bind({});

Icon_wifi.args = {
  uiType: IconUiType.icon_wifi,
};

export const Icon_copy = Template.bind({});

Icon_copy.args = {
  uiType: IconUiType.icon_copy,
};
