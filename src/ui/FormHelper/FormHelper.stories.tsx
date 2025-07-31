import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { FormHelper, FormHelperProps } from './FormHelper';
import { FormHelperUiType } from './FormHelper.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof FormHelper> = {
  title: 'UI/FormHelper',
  component: FormHelper,
  tags: ['autodocs'],
  args: {
    uiType: FormHelperUiType.default,
    show: true,
    message: LibraryUtils.getLoremRu(10),
    withoutPadding: false,
  },
  argTypes: {
    uiType: {
      control: 'select',
      options: Object.values(FormHelperUiType),
    },
  },
};

export default meta;

const Template: StoryFn<FormHelperProps> = (args: FormHelperProps) => <FormHelper {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const All = () => {
  return (
    <AllVariants<typeof FormHelperUiType>
      column={1}
      uiTypes={FormHelperUiType}
      boxPropsTooltip={{}}
      Component={(uiType) => (
        <Box maxWidth={200}>
          <Template uiType={uiType} message={LibraryUtils.getLoremRu(50)} />
        </Box>
      )}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
