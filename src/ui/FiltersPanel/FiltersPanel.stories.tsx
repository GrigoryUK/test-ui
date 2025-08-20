import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { FiltersPanel, FiltersPanelProps } from './FiltersPanel';
import { ButtonFilters } from '../ButtonFilters';
import { LibraryUtils, t } from '../../library-helpers';

const meta: Meta<typeof FiltersPanel> = {
  title: 'UI/FiltersPanel',
  component: FiltersPanel,
  tags: ['autodocs'],
  args: {
    config: [
      {
        subtitle: t['Date created'],
        value: 'dateRangeValue',
        type: 'dateRange',
      },
      {
        subtitle: t['Date created'],
        value: 'dateRangeValue',
        type: 'dateRange',
      },
      {
        subtitle: LibraryUtils.getLoremRu(5),
        type: 'input',
        value: 'inputValue',
      },
      {
        subtitle: LibraryUtils.getLoremRu(5),
        type: 'multiSelect',
        value: 'multiSelectValue',
        options: LibraryUtils.createArray(3).map((item) => {
          return {
            key: item,
            value: item,
            text: `${t['Option']} ${item}`,
          };
        }),
      },
      {
        subtitle: LibraryUtils.getLoremRu(5),
        type: 'singleSelect',
        value: 'singleSelectValue',
        options: LibraryUtils.createArray(3).map((item) => {
          return {
            key: item,
            value: item,
            text: `${t['Option']} ${item}`,
          };
        }),
      },
    ],
    textInfo: {
      labels: {
        date: t['Date'],
        singleSelect: t['Select from the list'],
        multiSelect: t['Select from the list'],
        dateRange: {
          from: t['from'],
          to: t['up to'],
        },
        input: t['Search'],
      },
      title: t['Filters'],
      filterActionButtonsText: {
        closeText: t['Close'],
        clearText: t['Clear'],
        applyText: t['Apply'],
      },
    },
    open: false,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FiltersPanel>;

const Template = (args: FiltersPanelProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [value, setValue] = useState<any>({});

  useEffect(() => {
    if (args === undefined) {
      return;
    }

    setValue(args.initialValues);
    setIsOpen(args.open);
  }, [args]);

  const onApply = (filters: any) => {
    const normalizedFilters: Record<string, any> = { ...filters };

    args.config.forEach((config) => {
      if (config.type === 'dateRange') {
        const from = `${config.value}.From`;

        const to = `${config.value}.To`;

        if (normalizedFilters[from] instanceof Date) {
          normalizedFilters[from] = normalizedFilters[from].toISOString();
        }

        if (normalizedFilters[to] instanceof Date) {
          normalizedFilters[to] = normalizedFilters[to].toISOString();
        }
      }
    });

    setValue(normalizedFilters);
  };

  const onClear = () => {
    setValue({});
  };

  return (
    <Box>
      <ButtonFilters
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {t['Filters']}
      </ButtonFilters>
      <FiltersPanel
        {...args}
        onClose={() => {
          setIsOpen(false);
        }}
        onClear={onClear}
        onApply={onApply}
        initialValues={value}
        open={isOpen}
      />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
