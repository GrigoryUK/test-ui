import React, { useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AutocompleteSingle, AutocompleteSingleProps } from './AutocompleteSingle';
import { LibraryUtils, t } from '../../library-helpers';
import { OptionItemProps } from '../../types';

const options: OptionItemProps<number>[] = LibraryUtils.createArray(5).map((item) => {
  return {
    id: item,
    text: `${t['Option']} ${item}`,
    value: item,
  };
});

const meta: Meta<typeof AutocompleteSingle> = {
  title: 'UI/AutocompleteSingle',
  component: AutocompleteSingle,
  tags: ['autodocs'],
  args: {
    value: null,
    label: LibraryUtils.getLoremRu(10),
    disableClearable: true,
    disabled: false,
    withHighlightText: false,
    noOptionsText: t['No data'],
    options: options,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AutocompleteSingle>;

const Template = (args: AutocompleteSingleProps) => {
  const [value, setValue] = React.useState<number | null>(null);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value as any);
  }, [args.value]);

  const onChange = (_: any, value?: OptionItemProps<number>) => {
    if (value?.value === undefined) {
      return;
    }

    setValue(value.value);
  };

  return (
    <AutocompleteSingle
      {...args}
      options={options}
      value={value}
      onClear={() => {
        setValue(null);
      }}
      onChange={onChange}
    />
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
