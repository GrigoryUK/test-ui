import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { FormHelperText, FormHelperTextProps } from './FormHelperText';
import { FormHelperTextUiType } from './FormHelperText.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof FormHelperText> = {
  title: 'UI/HelperText',
  component: FormHelperText,
  tags: ['autodocs'],
  args: {
    uiType: FormHelperTextUiType.default,
    show: true,
    message: LibraryUtils.getLoremRu(10),
    withoutPadding: false,
  },
  argTypes: {
    uiType: {
      control: 'select',
      options: Object.values(FormHelperTextUiType),
    },
  },
};

export default meta;

const Template: StoryFn<FormHelperTextProps> = (args: FormHelperTextProps) => <FormHelperText {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const All = () => {
  return (
    <AllVariants<typeof FormHelperTextUiType>
      column={1}
      uiTypes={FormHelperTextUiType}
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
