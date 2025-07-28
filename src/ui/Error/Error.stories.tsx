import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { Error, ErrorProps } from './Error';
import { HelperTextUiType } from '../HelperText/HelperText.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof Error> = {
  title: 'UI/Error',
  component: Error,
  tags: ['autodocs'],
  args: {
    uiType: HelperTextUiType.default,
    show: true,
    message: LibraryUtils.getLoremEn(10),
    withoutPadding: false,
  },
  argTypes: {
    uiType: {
      control: 'select',
      options: Object.values(HelperTextUiType),
    },
  },
};

export default meta;

const Template: StoryFn<ErrorProps> = (args: ErrorProps) => <Error {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const All = () => {
  return (
    <AllVariants<typeof HelperTextUiType>
      uiTypes={HelperTextUiType}
      column={1}
      Component={(uiType) => (
        <Box maxWidth={200}>
          <Template show uiType={uiType} message={LibraryUtils.getLoremEn(50)} />
        </Box>
      )}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
