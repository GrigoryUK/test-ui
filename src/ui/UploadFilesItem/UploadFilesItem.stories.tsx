import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { UploadFilesItem, UploadFilesItemProps } from './UploadFilesItem';
import { LibraryUtils, t } from '../../library-helpers';

const meta: Meta<typeof UploadFilesItem> = {
  title: 'UI/UploadFilesItem',
  component: UploadFilesItem,
  tags: ['autodocs'],
  args: {
    copyText: {
      textBeforeCopy: t['Copy'],
      textAfterCopy: t['Copied'],
    },
    isCopy: false,
    fileName: LibraryUtils.getLoremRu(20),
    onClick: () => {},
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<UploadFilesItemProps> = (args: UploadFilesItemProps) => <UploadFilesItem {...args} />;

export const Default = Template.bind({});

Default.args = {};
