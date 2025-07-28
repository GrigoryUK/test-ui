import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { Divider, DividerProps } from './Divider';
import { DividerUiType } from './Divider.types';
import { AllVariants } from '../../library-helpers';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {
    uiType: DividerUiType.default,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(DividerUiType),
    },
  },
};

export default meta;

const Template: StoryFn<DividerProps> = (args: DividerProps) => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: DividerUiType.default,
};

export const All = () => {
  return (
    <AllVariants<typeof DividerUiType>
      uiTypes={DividerUiType}
      column={1}
      boxPropsTooltip={{
        display: 'block',
      }}
      Component={(uiType) => (
        <Box height={10}>
          <Template uiType={uiType} />
        </Box>
      )}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
