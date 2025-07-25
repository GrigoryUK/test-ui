import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { IconMaterial, IconMaterialProps } from './IconMaterial';
import { IconMaterialUiType } from './IconMaterial.types';
import { AllVariants } from '../../template-stories';

const meta: Meta<typeof IconMaterial> = {
  title: 'ICONS/IconMaterial',
  component: IconMaterial,
  tags: ['autodocs'],
  args: {
    uiType: IconMaterialUiType.icon_close,
    fontSize: 'small',
    color: 'inherit',
    sx: {},
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(IconMaterialUiType),
    },
    fontSize: { control: 'select', options: ['inherit', 'large', 'medium', 'small'] },
    color: {
      control: 'select',
      options: ['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
};

export default meta;

const Template: StoryFn<IconMaterialProps> = (args: IconMaterialProps) => <IconMaterial {...args} />;

export const Icon_close = Template.bind({});

Icon_close.args = {
  uiType: IconMaterialUiType.icon_close,
};

export const All = () => {
  return (
    <AllVariants<typeof IconMaterialUiType>
      column={16}
      uiTypes={IconMaterialUiType}
      Component={(uiType) => <Template uiType={uiType} fontSize={'small'} />}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
