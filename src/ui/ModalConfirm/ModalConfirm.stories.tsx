import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { ModalConfirm, ModalConfirmProps } from './ModalConfirm';
import { Button } from '../Button';
import { ModalSize } from '../Modal/Modal.types';
import { LibraryUtils, t } from '../../library-helpers';

const meta: Meta<typeof ModalConfirm> = {
  title: 'UI/ModalConfirm',
  component: ModalConfirm,
  tags: ['autodocs'],
  args: {
    isOpen: false,
    actionModalButtonsProps: {
      confirmText: t['Confirm'],
      cancelText: t['Cancel'],
    },
    size: 'small',
    title: LibraryUtils.getLoremRu(20),
    content: <Box>{LibraryUtils.getLoremRu()}</Box>,
    withoutButtonActions: false,
    withoutButtonClose: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(ModalSize),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalConfirm>;

const Template = (args: ModalConfirmProps) => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    if (args.isOpen === undefined) {
      return;
    }

    setValue(args.isOpen);
  }, [args.isOpen]);

  const onToggle = () => {
    setValue((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle} uiType={'shadow'}>
        {value ? t['Close'] : t['Open']}
      </Button>
      <ModalConfirm
        {...args}
        isOpen={value}
        actionModalButtonsProps={{
          ...args?.actionModalButtonsProps,
          onCancel: () => {
            setValue(false);
          },
          onConfirm: () => {
            setValue(false);
          },
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
