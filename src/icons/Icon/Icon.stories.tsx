import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Icon, IconProps } from './Icon';
import { IconUiType } from './Icon.types';
import { AllVariants } from '../../template-stories';

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

export const All = () => {
  return (
    <AllVariants<typeof IconUiType>
      column={16}
      uiTypes={IconUiType}
      boxPropsTooltip={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      Component={(uiType) => <Template uiType={uiType} width={24} height={24} />}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
