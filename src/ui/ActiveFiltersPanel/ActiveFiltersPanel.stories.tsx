import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ActiveFiltersPanel, ActiveFiltersPanelItemProps, ActiveFiltersPanelProps } from './ActiveFiltersPanel';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof ActiveFiltersPanel> = {
  title: 'UI/ActiveFiltersPanel',
  component: ActiveFiltersPanel,
  tags: ['autodocs'],
  args: {
    items: LibraryUtils.createArray(3).map((item) => {
      return {
        key: String(item),
        value: String(item),
        label: `${LibraryUtils.getLoremRu(LibraryUtils.getRandomNumber(1))}`,
      };
    }),
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ActiveFiltersPanel>;

const Template = (args: ActiveFiltersPanelProps) => {
  const [value, setValue] = useState<ActiveFiltersPanelItemProps[]>([]);

  useEffect(() => {
    if (args.items === undefined) {
      return;
    }

    setValue(args.items);
  }, [args.items]);

  return (
    <ActiveFiltersPanel
      {...args}
      items={value}
      onRemoveFilter={(key) => {
        setValue((prevState) => prevState.filter((item) => item.key !== key));
      }}
      onClearAll={() => {
        setValue([]);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
