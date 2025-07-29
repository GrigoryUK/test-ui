import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Collapse, CollapseProps } from './Collapse';
import { CollapseUiType } from './Collapse.types';
import { Button } from '../Button';
import { Text } from '../Text';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof Collapse> = {
  title: 'UI/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  args: {
    uiType: CollapseUiType.default,
    in: true,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(CollapseUiType),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

const Template = (args: CollapseProps) => {
  const [value, setValue] = useState<boolean>(true);

  useEffect(() => {
    if (args.in === undefined) {
      return;
    }

    setValue(args.in);
  }, [args.in]);

  return (
    <Box>
      <Box mb={1}>
        <Button
          onClick={() => {
            setValue((prevState) => !prevState);
          }}
          variant={'contained'}
          uiType={'shadow'}
        >
          {value ? 'show' : 'hidden'}
        </Button>
      </Box>

      <Collapse {...args} in={value}>
        <Text uiType={'subtitle_16_700_primary_087'}>{LibraryUtils.getLoremRu(50)}</Text>
      </Collapse>
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const All = () => {
  return (
    <AllVariants<typeof CollapseUiType> uiTypes={CollapseUiType} Component={(uiType) => <Template uiType={uiType} />} />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
