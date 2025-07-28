import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmDialog, ConfirmDialogProps } from './ConfirmDialog';
import { ConfirmDialogSize } from './ConfirmDialog.types';
import { Button } from '../Button';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'UI/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  args: {
    open: false,
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    size: 'small',
    title: LibraryUtils.getLoremEn(20),
    content: <Box>{LibraryUtils.getLoremEn()}</Box>,
    withoutButtonActions: false,
    withoutCloseButton: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(ConfirmDialogSize),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmDialog>;

const Template = (args: ConfirmDialogProps) => {
  const [value, setValue] = React.useState<boolean>(false);

  useEffect(() => {
    if (args.open === undefined) {
      return;
    }

    setValue(args.open);
  }, [args.open]);

  const onToggle = () => {
    setValue((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle} uiType={'shadow'}>
        {value ? 'Close' : 'Open'}
      </Button>
      <ConfirmDialog
        {...args}
        onCancel={() => {
          setValue(false);
        }}
        onConfirm={() => {
          setValue(false);
        }}
        open={value}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
