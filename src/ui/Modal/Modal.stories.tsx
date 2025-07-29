import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Modal, ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {};
