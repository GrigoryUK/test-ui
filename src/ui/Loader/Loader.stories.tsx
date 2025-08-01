import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Loader, LoaderProps } from './Loader';
import { LoaderUiType } from './Loader.types';
import { AllVariants } from '../../library-helpers';

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  args: {
    size: 48,
    height: 150,
    maxWidth: '100%',
    uiType: LoaderUiType.default,
    text: 'Загрузка',
    withText: false,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(LoaderUiType),
    },
    text: {
      control: 'text',
    },
    withText: {
      control: 'boolean',
    },
    maxWidth: {
      control: 'text',
    },
    height: {
      control: 'number',
    },
    size: {
      control: 'number',
    },
  },
};

export default meta;

const Template: StoryFn<LoaderProps> = (args: LoaderProps) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  uiType: LoaderUiType.default,
};

export const All = () => {
  return (
    <AllVariants<typeof LoaderUiType>
      column={2}
      uiTypes={LoaderUiType}
      boxPropsTooltip={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      Component={(uiType) => <Template uiType={uiType} height={50} />}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
