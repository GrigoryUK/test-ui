import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { FormError, FormErrorProps } from './FormError';
import { FormErrorUiType } from './FormError.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof FormError> = {
  title: 'UI/FormError',
  component: FormError,
  tags: ['autodocs'],
  args: {
    uiType: FormErrorUiType.default,
    show: true,
    message: LibraryUtils.getLoremRu(10),
    withoutPadding: false,
  },
  argTypes: {
    uiType: {
      control: 'select',
      options: Object.values(FormErrorUiType),
    },
  },
};

export default meta;

const Template: StoryFn<FormErrorProps> = (args: FormErrorProps) => <FormError {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const All = () => {
  return (
    <AllVariants<typeof FormErrorUiType>
      uiTypes={FormErrorUiType}
      column={1}
      Component={(uiType) => (
        <Box maxWidth={200}>
          <Template show uiType={uiType} message={LibraryUtils.getLoremRu(50)} />
        </Box>
      )}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
