import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ProgressSteps, ProgressStepsProps } from './ProgressSteps';
import { LibraryUtils, t } from '../../library-helpers';

const meta: Meta<typeof ProgressSteps> = {
  title: 'UI/ProgressSteps',
  component: ProgressSteps,
  tags: ['autodocs'],
  args: {
    items: LibraryUtils.createArray(5).map((item) => {
      return {
        label: `${t['Step']} ${item}`,
        value: item,
      };
    }),
    activeStep: 2,
    availableSteps: 4,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProgressSteps>;

const Template = (args: ProgressStepsProps) => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    if (args.activeStep === undefined) {
      return;
    }

    setValue(args.activeStep);
  }, [args.activeStep]);

  const onStepClick = (value: number) => {
    setValue(value + 1);
  };

  return <ProgressSteps {...args} activeStep={value} onStepClick={onStepClick} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
