import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Modal, ModalProps } from './Modal';
import { ModalSize } from './Modal.types';
import { ActionModalButtons } from '../ActionModalButtons';
import { Button } from '../Button';
import { LibraryUtils, t } from '../../library-helpers';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    size: 'medium',
    isOpen: false,
    isLoading: false,
    title: LibraryUtils.getLoremRu(20),
    content: <>{LibraryUtils.getLoremRu()}</>,
    contentAfter: <ActionModalButtons cancelText={t['Cancel']} confirmText={t['Confirm']} />,
    withoutButtonClose: false,
    fullWidth: true,
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(ModalSize),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Template = (args: ModalProps) => {
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
      <Modal
        {...args}
        isOpen={value}
        onClose={() => {
          setValue(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
