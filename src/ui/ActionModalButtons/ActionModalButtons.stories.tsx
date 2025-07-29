import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { ActionModalButtons, ActionModalButtonsProps } from './ActionModalButtons';
import { ActionModalButtonsUiType } from './ActionModalButtons.types';
import { AllVariants, t } from '../../library-helpers';

const CONFIRM_TEXT = t['Confirm'];

const CANCEL_TEXT = t['Cancel'];

const meta: Meta<typeof ActionModalButtons> = {
  title: 'UI/ActionModalButtons',
  component: ActionModalButtons,
  tags: ['autodocs'],
  args: {
    uiType: ActionModalButtonsUiType.default,
    confirmText: CONFIRM_TEXT,
    cancelText: CANCEL_TEXT,
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(ActionModalButtonsUiType),
    },
  },
};

export default meta;

const Template: StoryFn<ActionModalButtonsProps> = (args: ActionModalButtonsProps) => <ActionModalButtons {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: ActionModalButtonsUiType.default,
};

export const All = () => {
  return (
    <AllVariants<typeof ActionModalButtonsUiType>
      uiTypes={ActionModalButtonsUiType}
      Component={(uiType) => <Template uiType={uiType} cancelText={CANCEL_TEXT} confirmText={CONFIRM_TEXT} />}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
