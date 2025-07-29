import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { InfoPlate, InfoPlateProps } from './InfoPlate';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof InfoPlate> = {
  title: 'UI/InfoPlate',
  component: InfoPlate,
  tags: ['autodocs'],
  args: {
    maxWidth: 215,
    items: [
      {
        value: LibraryUtils.getRandomNumber(),
        currency: LibraryUtils.getCurrency(),
        description: LibraryUtils.getLoremRu(20),
      },
      {
        value: LibraryUtils.getRandomNumber(),
        currency: LibraryUtils.getCurrency(),
        description: LibraryUtils.getLoremRu(10),
        withTooltip: true,
        tooltipProps: {
          disabled: true,
        },
      },
      {
        value: LibraryUtils.getRandomNumber(),
        currency: LibraryUtils.getCurrency(),
        description: LibraryUtils.getLoremRu(10),
        withTooltip: true,
        tooltipProps: {
          tooltipContent: LibraryUtils.getLoremRu(20),
        },
      },
      {
        value: LibraryUtils.getRandomNumber(),
        currency: LibraryUtils.getCurrency(),
        description: LibraryUtils.getLoremRu(10),
        withTooltip: true,
        tooltipProps: {
          tooltipContent: LibraryUtils.getLoremRu(20),
        },
        isLoading: true,
      },
    ],
    withoutSticky: false,
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<InfoPlateProps> = (args: InfoPlateProps) => {
  return <InfoPlate {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
