import React from 'react';

import { Box, TooltipProps as TooltipPropsMui } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, TooltipProps } from './Tooltip';
import { AllVariants, LibraryUtils, t } from '../../library-helpers';

const CONTENT = LibraryUtils.getLoremRu(10);

const TOOLTIP = t['Tooltip'];

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    itemWithTooltipProps: {
      content: CONTENT,
      placement: 'auto',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const Template = (args: TooltipProps) => {
  return (
    <Tooltip
      {...args}
      boxProps={{
        width: 'fit-content',
        ...args?.boxProps,
      }}
      itemWithTooltipProps={{
        content: CONTENT,
        ...args?.itemWithTooltipProps,
      }}
    >
      <Box>{TOOLTIP}</Box>
    </Tooltip>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const All = () => {
  const placements: TooltipPropsMui['placement'][] = ['top', 'left', 'right', 'bottom'];

  return (
    <AllVariants
      column={4}
      customContent={placements.map((item, index) => {
        return (
          <Tooltip
            key={`${item}__${index}`}
            itemWithTooltipProps={{
              placement: item,
            }}
            boxProps={{
              width: 'fit-content',
            }}
          >
            {TOOLTIP}
          </Tooltip>
        );
      })}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
