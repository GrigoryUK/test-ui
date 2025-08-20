import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { TranslationSelection, TranslationSelectionItemType, TranslationSelectionProps } from './TranslationSelection';
import { t } from '../../library-helpers';

const INITIAL_STATE = 'en-EN';

const meta: Meta<typeof TranslationSelection> = {
  title: 'UI/TranslationSelection',
  component: TranslationSelection,
  tags: ['autodocs'],
  args: {
    items: [
      {
        value: 'en-EN',
        text: t['English'],
      },
      {
        value: 'ru-RU',
        text: t['Russian'],
      },
      {
        value: 'uz-UZ',
        text: t['Uzbekistan'],
      },
      {
        value: 'kz-KZ',
        text: t['Kazakhstan'],
      },
    ],
    value: INITIAL_STATE,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TranslationSelection>;

const Template = (args: TranslationSelectionProps) => {
  const [value, setValue] = useState<TranslationSelectionItemType>(INITIAL_STATE);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value);
  }, [args.value]);

  const onChange = (value: TranslationSelectionItemType) => {
    setValue(value);
  };

  return (
    <Box maxWidth={273}>
      <TranslationSelection {...args} value={value} onChange={onChange} />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
