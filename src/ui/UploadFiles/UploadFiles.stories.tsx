import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { UploadFiles, UploadFilesProps } from './UploadFiles';
import { t } from '../../library-helpers';

const meta: Meta<typeof UploadFiles> = {
  title: 'UI/UploadFiles',
  component: UploadFiles,
  tags: ['autodocs'],
  args: {
    disabled: false,
    isError: false,
    copyText: {
      textBeforeCopy: t['Copy'],
      textAfterCopy: t['Copied'],
    },
    value: [],
    textInfo: {
      title: t['List of documents'],
      preSize: t['up to'],
      preFormat: t['Format'],
      dragToWindow: t['or drag it to this window'],
      selectFile: t['Select a file'],
      downloadTemplate: t['Download the template'],
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof UploadFiles>;

const Template = (args: UploadFilesProps) => {
  const [value, setValue] = useState<File[]>([]);

  useEffect(() => {
    if (args.value === undefined) {
      return;
    }

    setValue(args.value);
  }, [args.value]);

  const onChange = (value: File[]) => {
    setValue(value);
  };

  const onDelete = (index: number) => {
    setValue((prevValue) => prevValue.filter((_, i) => i !== index));
  };

  return <UploadFiles {...args} onDelete={onDelete} value={value} onChange={onChange} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
