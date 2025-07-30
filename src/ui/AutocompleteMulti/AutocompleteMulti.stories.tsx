import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AutocompleteMulti, AutocompleteMultiProps } from './AutocompleteMulti';
import { LibraryUtils, t } from '../../library-helpers';
import { OptionItemProps } from '../../types';

const options: OptionItemProps<number>[] = LibraryUtils.createArray(5).map((item) => {
  return {
    id: item,
    text: `${t['Option']} ${item}`,
    value: item,
  };
});

const meta: Meta<typeof AutocompleteMulti> = {
  title: 'UI/AutocompleteMulti',
  component: AutocompleteMulti,
  tags: ['autodocs'],
  args: {
    value: [],
    label: LibraryUtils.getLoremRu(10),
    disableClearable: false,
    disabled: false,
    withHighlightText: false,
    noOptionsText: t['No data'],
    options: options,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AutocompleteMulti>;

const Template = (args: AutocompleteMultiProps) => {
  const [value, setValue] = useState<number[]>([]);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value as any);
  }, [args.value]);

  const onChange = (_: any, value: number[]) => {
    setValue(value);
  };

  return (
    <AutocompleteMulti
      {...args}
      options={options}
      value={value}
      onClear={() => {
        setValue([]);
      }}
      onChange={onChange}
    />
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
