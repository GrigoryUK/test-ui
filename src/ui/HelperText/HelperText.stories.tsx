import React from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryFn } from '@storybook/react';

import { HelperText, HelperTextProps } from './HelperText';
import { HelperTextUiType } from './HelperText.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof HelperText> = {
  title: 'UI/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  args: {
    uiType: HelperTextUiType.default,
    show: true,
    message: LibraryUtils.getLoremRu(10),
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

const Template: StoryFn<HelperTextProps> = (args: HelperTextProps) => <HelperText {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const All = () => {
  return (
    <AllVariants<typeof HelperTextUiType>
      column={1}
      uiTypes={HelperTextUiType}
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
