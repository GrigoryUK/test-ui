import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { InfoNotice, InfoNoticeProps } from './InfoNotice';
import { IconMaterial } from '../../icons';
import { LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof InfoNotice> = {
  title: 'UI/InfoNotice',
  component: InfoNotice,
  tags: ['autodocs'],
  args: {
    text: LibraryUtils.getLoremRu(),
    icon: <IconMaterial uiType={'icon_info_outlined'} sx={{ fontSize: 22 }} />,
  },
  argTypes: {},
};

export default meta;

const Template: StoryFn<InfoNoticeProps> = (args: InfoNoticeProps) => <InfoNotice {...args} />;

export const Default = Template.bind({});

Default.args = {};
